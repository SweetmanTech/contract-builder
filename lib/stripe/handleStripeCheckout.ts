export const handleStripeCheckout = async ({
  amount,
  baseUrl,
}: {
  amount: number
  baseUrl: string
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
