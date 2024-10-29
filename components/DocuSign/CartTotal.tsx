import React, { useState } from 'react'
import Button from '../Button'
import ReadHereLink from '../ReadHereLink'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import InfoDialog from '../InfoDialog'

const CartTotal = () => {
  const { setTab } = useContractBuilderProvider()
  const [isOpen, setIsOpen] = useState(false)
  const MoneyPara = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex gap-1 ml-auto">
        <span>$</span>
        <p className="font-rubik font-semibold text-lg ml-auto">{children}</p>
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-12 mb-10">
      <div className="w-full self-start grid grid-cols-[2.5fr_1.5fr] place-content-between place-items-end gap-4 font-rubik">
        <div className="w-full flex flex-col gap-2">
          <h2 className="capitalize font-bold text-md md:text-2xl">
            Your Selection
          </h2>
          <hr className="border border-grey -mt-1" />
        </div>
        <div className="w-full flex flex-col gap-2">
          <h2 className="capitalize font-bold text-md place-self-end md:text-2xl">
            Summary
          </h2>
          <hr className="border border-grey -mt-1" />
        </div>
        <div className="flex flex-col gap-2 text-left font-share place-self-center">
          <div className="w-full flex justify-between gap-2 md:text-xl">
            <p>1x</p>
            <p>Automized Contract</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 font-share text-[11px]">
          <div className="w-full flex items-center gap-2 ">
            <p>Sub-Total</p>
            <MoneyPara>2.00</MoneyPara>
          </div>
          <div className="w-full items-center flex gap-2">
            <p>Taxes</p>
            <MoneyPara>0.34</MoneyPara>
          </div>
          <hr className="border border-grey w-full" />
          <div className="ml-auto">
            <div>
              <MoneyPara>2.14</MoneyPara>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center md:items-start text-center">
        <Button
          className="w-4/5 self-center md:self-start md:w-fit p-4"
          onClick={() => null}
        >
          Automatically Send
        </Button>
        <ReadHereLink
          open={() => setIsOpen(true)}
          label="Why does this cost money?"
          className="pt-0"
        />
        <ReadHereLink
          label="Go back to download for free"
          className="text-grey pt-0"
          open={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        />
      </div>
      <InfoDialog
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        className="sm:p-8"
      >
        <p className="p-0">
          MESA would like to facilitate finalizing your agreements by providing
          you Docusign integration as a simple, fast, secure and non expensive
          way to digitally sign your contracts
        </p>
      </InfoDialog>
    </div>
  )
}

export default CartTotal
