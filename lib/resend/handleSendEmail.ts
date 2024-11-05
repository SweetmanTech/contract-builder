export const handleSendEmail = async ({
  baseUrl,
  paymentReceiptLink,
  contractIpfsLink,
  collaborators,
}: {
  baseUrl: string
  paymentReceiptLink: string
  contractIpfsLink: string
  collaborators: string[]
}) => {
  try {
    const res = await fetch(`${baseUrl}/api/resend/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        paymentReceiptLink,
        contractIpfsLink,
        collaborators,
      }),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error('error:\n\n', error)
  }
}
