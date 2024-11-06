import { Resend } from 'resend'

export const createResendClient = () => {
  try {
    const resend = new Resend('re_Uk3efTNu_96UGE8WdiuUJYqZKHiregtRE')
    return resend
  } catch (error) {
    console.error(error)
    return null
  }
}
