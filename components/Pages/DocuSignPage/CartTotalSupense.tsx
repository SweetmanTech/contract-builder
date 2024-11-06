import React, { Suspense } from 'react'
import CartTotal from './CartTotal'

const CartTotalSupense = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartTotal />
    </Suspense>
  )
}

export default CartTotalSupense
