interface EmailTemplateProps {
  firstName?: string
  paymentReceiptLink: string
  contractIpfsLink: string
  collaborators: string[]
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName = 'Mesa',
  paymentReceiptLink,
  contractIpfsLink,
  collaborators,
}) => (
  <div className="font-sans text-gray-800 leading-relaxed">
    <h1 className="text-2xl font-bold text-green-600">Payment Confirmation</h1>
    <p className="mt-4">Hi {firstName},</p>
    <p className="mt-2">
      Thank you for your payment. Here are the details of your transaction:
    </p>

    <h2 className="mt-6 text-lg font-semibold">Payment Information</h2>
    <ul className="mt-2 list-disc list-inside space-y-1">
      <li>
        <span className="font-medium">Stripe Receipt:</span>{' '}
        <a href={paymentReceiptLink} className="text-blue-600 hover:underline">
          View Receipt
        </a>
      </li>
      <li>
        <span className="font-medium">Contract Link:</span>{' '}
        <a href={contractIpfsLink} className="text-blue-600 hover:underline">
          View Contract on IPFS
        </a>
      </li>
    </ul>

    <h2 className="mt-6 text-lg font-semibold">Collaborators Emails</h2>
    <ul className="mt-2 list-disc list-inside space-y-1">
      {collaborators.map((email, index) => (
        <li key={index} className="text-gray-700">
          {email}
        </li>
      ))}
    </ul>

    <p className="mt-8">
      Best regards,
      <br />
      Mesa{' '}
    </p>
  </div>
)
