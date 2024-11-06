export const handleStripeCheckout = async ({
  amount,
  baseUrl,
  metadata,
}: {
  amount: number
  baseUrl: string
  metadata: { cid: string } | any
}) => {
  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        baseUrl,
        metadata,
      }),
    })

    const data = await response.json()
    if (data.url) {
      window.location.href = data.url
    }
  } catch (error) {
    console.error('Error creating checkout session:', error)
  }
}
