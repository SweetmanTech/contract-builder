import React from 'react'

import { useModalProvider } from '@/providers/ModalProvider'
import Button from '@/components/Button'
import ReadHereLink from '@/components/ReadHereLink'
import { useRouter } from 'next/navigation'

const CartTotal = () => {
  const { setIsDocuSignModalOpen } = useModalProvider()
  const router = useRouter()
  const MoneyPara = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex gap-1 ml-auto">
        <span>$</span>
        <p className="font-rubik font-semibold text-[14px] ml-auto">
          {children}
        </p>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-6 mb-4">
      <div className="w-full self-start grid grid-cols-[2.5fr_1.5fr] place-content-between place-items-end gap-4 font-rubik">
        <div className="w-full flex flex-col gap-2">
          <h2 className="capitalize font-bold text-sm md:text-2xl">
            Your Selection
          </h2>
          <hr className="border border-grey -mt-1" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="capitalize font-bold text-sm place-self-end md:text-2xl">
            Summary
          </h2>
          <hr className="border border-grey -mt-1" />
        </div>
        <div className="flex flex-col gap-2 text-left font-share place-self-start">
          <div className="w-full flex justify-between gap-2 md:text-xl">
            <p>1x</p>
            <p className="md:text-[24px]">Automized Contract</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-share text-[10px]">
          <div className="w-full flex items-center gap-1 ">
            <p className="md:text-[18px]">Sub-Total</p>
            <MoneyPara>2.00</MoneyPara>
          </div>
          <div className="w-full items-center flex gap-1">
            <p className="md:text-[18px]">Taxes</p>
            <MoneyPara>0.34</MoneyPara>
          </div>
          <hr className="border border-grey w-full" />
          <div className="ml-auto">
            <MoneyPara>2.14</MoneyPara>
          </div>
          <ReadHereLink
            label="Go back to download for free"
            className="text-grey pt-0 text-[15px] hidden md:block"
            open={() => router.push('/contract-builder')}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center md:items-start text-center">
        <Button
          className="w-[95%] text-[12px] md:w-fit self-center p-4 md:px-14 md:py-6 md:text-[20px]"
          onClick={() => null}
        >
          Automatically Send
        </Button>
        <ReadHereLink
          open={() => setIsDocuSignModalOpen(true)}
          label="Why does this cost money?"
          className="pt-0 md:hidden text-[15px]"
        />
        <ReadHereLink
          label="Go back to download for free"
          className="text-grey pt-0 md:hidden text-[15px]"
          open={() => router.push('/contract-builder')}
        />
      </div>
    </div>
  )
}

export default CartTotal
