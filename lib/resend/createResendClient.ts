import { Resend } from 'resend'

export const createResendClient = () => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY!)
    return resend
  } catch (error) {
    console.error(error)
    return null
  }
}
