import React from 'react'
import CartTotal from './CartTotal'
import Description from './Description'

const DocuSign = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-32 no-scrollbar">
      <div className="flex flex-col text-center">
        <span className="text-[13px]">Powered By</span>
        <p className="text-3xl font-medium">DocuSign</p>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-between gap-12 md:gap-[10%]">
        <Description />
        <CartTotal />
      </div>
    </div>
  )
}

export default DocuSign
