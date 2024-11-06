interface EmailTemplateProps {
  firstName: string
  paymentReceiptLink: string
  contractIpfsLink: string
  collaborators: string[]
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  paymentReceiptLink,
  contractIpfsLink,
  collaborators,
}) => (
  <h1 className="text-2xl font-bold text-green-600">
    Payment Confirmation {firstName} {paymentReceiptLink} {contractIpfsLink}{' '}
    {collaborators.map((item) => item)}
  </h1>
)
