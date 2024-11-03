import { createStripeClient } from '@/lib/stripe/createStripeClient'
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
    const customer_details = sessionObject?.customer_details

    return NextResponse.json(
      {
        id,
        customer_details,
      },
      { status: 200 },
    )
  }

  return NextResponse.json('Event received', { status: 200 })
}
