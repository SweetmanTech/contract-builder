import { Stripe } from 'stripe'
export const createStripeClient = () => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
    return stripe
  } catch (error) {
    console.error(error)
    return null
  }
}
