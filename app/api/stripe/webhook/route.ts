import { sendEmail } from '@/lib/resend/sendEmail'
import { createStripeClient } from '@/lib/stripe/createStripeClient'
import { getContractInfo } from '@/lib/supabase/getContractInfo'
import { NextRequest, NextResponse } from 'next/server'

const stripe = createStripeClient()

export const POST = async (req: NextRequest) => {
  const eventsToListen = ['checkout.session.completed']
  if (!stripe) {
    return NextResponse.json(
      { error: 'Error initializing stripe client' },
      { status: 500 },
    )
  }

  const sig = req.headers.get('stripe-signature')!
  const body = await req.text()

  let event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    )
  } catch (err) {
    console.error(`Webhook signature verification failed.`, err)
    return NextResponse.json('Webhook Error: Signature verification failed', {
      status: 400,
    })
  }

  if (eventsToListen.includes(event.type)) {
    const sessionObject = event.data.object as any
    const id = sessionObject?.id
    const metadata = sessionObject?.metadata

    const paymentIntentId = sessionObject?.payment_intent
    const paymentLink = `https://dashboard.stripe.com/payments/${paymentIntentId}`
    try {
      const contractInfo = await getContractInfo(metadata?.cid)
      const customerDetails = sessionObject?.customer_details
      const customerName = customerDetails?.name
      const res = await sendEmail({
        firstName: customerName,
        paymentReceiptLink: paymentLink,
        contractIpfsLink: 'ipfs://' + contractInfo?.ipfs_cid || '',
        collaborators: contractInfo?.emails || [],
      })

      if (!res) {
        return NextResponse.json(
          { error: 'Error sending email' },
          { status: 500 },
        )
      }
    } catch (error) {
      console.error('Error sending email:', error)
      return NextResponse.json(
        { error: 'Error sending email' },
        { status: 500 },
      )
    }

    return NextResponse.json(
      {
        id,
      },
      { status: 200 },
    )
  }

  return NextResponse.json('Event received', { status: 200 })
}
