'use client'
import React from 'react'
import CartTotal from './CartTotal'
import Description from './Description'
import { useModalProvider } from '@/providers/ModalProvider'
import InfoDialog from '@/components/InfoDialog'

const DocuSign = () => {
  const { isDocuSignModalOpen, setIsDocuSignModalOpen } = useModalProvider()
  return (
    <div className="md:mt-12 flex flex-col md:flex-col-reverse items-center gap-8 md:gap-32 no-scrollbar">
      <div className="flex flex-col text-center">
        <span className="text-[13px]">Powered By</span>
        <p className="text-3xl font-medium">DocuSign</p>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-12 md:gap-[10%]">
        <Description />

        <CartTotal />
      </div>
      <InfoDialog
        isOpen={isDocuSignModalOpen}
        close={() => setIsDocuSignModalOpen(false)}
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

export default DocuSign
