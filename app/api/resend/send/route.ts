import { EmailTemplate } from '@/components/EmailTemplate/EmailTemplate'
import { createResendClient } from '@/lib/resend/createResendClient'
import { NextRequest, NextResponse } from 'next/server'

const resend = createResendClient()

export async function POST(req: NextRequest) {
  if (!resend) {
    return NextResponse.json(
      { error: 'Unable to initialize resend client' },
      { status: 500 },
    )
  }
  try {
    const body = await req.json()
    const { paymentReceiptLink, contractIpfsLink, collaborators } = body

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO?.split(',') || [''],
      subject: 'Contract Payment Confirmation',
      react: EmailTemplate({
        paymentReceiptLink,
        contractIpfsLink,
        collaborators,
      }),
    })

    if (error) {
      console.error('Error sending email:', error)
      return NextResponse.json({ error }, { status: 500 })
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 })
  }
}
