import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate'
import { createResendClient } from './createResendClient'

const resend = createResendClient()

export const sendEmail = async ({
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
      from: `Mesa <contracts@mesawallet.io>`,
      to: ['sweetmantech@gmail.com'],
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
