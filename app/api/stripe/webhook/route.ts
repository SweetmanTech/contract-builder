import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate'
import { createResendClient } from '@/lib/resend/createResendClient'
import { createStripeClient } from '@/lib/stripe/createStripeClient'
import { getContractInfo } from '@/lib/supabase/getContractInfo'
import { NextRequest, NextResponse } from 'next/server'

const stripe = createStripeClient()

const resend = createResendClient()

const sendEmail = async ({
  firstName = 'Mesa',
  paymentReceiptLink,
  contractIpfsLink,
  collaborators,
}: {
  firstName?: string
  paymentReceiptLink: string
  contractIpfsLink: string
  collaborators: string[]
}) => {
  if (!resend) {
    return null
  }
  try {
    const { data, error } = await resend.emails.send({
      from: `Mesa <${process.env.RESEND_FROM_EMAIL}>`,
      to: process.env.RESEND_TO?.split(',') || [''],
      subject: 'Contract Payment Confirmation',
      react: EmailTemplate({
        firstName,
        paymentReceiptLink,
        contractIpfsLink,
        collaborators,
      }),
    })

    if (error) {
      console.error('Error sending email:', error)
      return null
    }

    return data
  } catch (error) {
    console.error('Error sending email:', error)
    return null
  }
}
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
    const contractInfo = await getContractInfo(metadata?.cid)
    const customerDetails = sessionObject?.customer_details
    const customerName = customerDetails?.name
    const res = sendEmail({
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

    return NextResponse.json(
      {
        id,
      },
      { status: 200 },
    )
  }

  return NextResponse.json('Event received', { status: 200 })
}
