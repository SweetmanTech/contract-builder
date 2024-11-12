'use client'
import React from 'react'
import Description from './Description'
import { useModalProvider } from '@/providers/ModalProvider'
import InfoDialog from '@/components/InfoDialog'
import CartTotalSupense from './CartTotalSupense'

const DocuSign = () => {
  const { isDocuSignModalOpen, setIsDocuSignModalOpen } = useModalProvider()
  return (
    <div className="md:mt-12 relative flex flex-col md:flex-col-reverse items-center gap-6 md:gap-24 no-scrollbar">
      <div className="flex flex-col text-center">
        <span className="text-[13px]">Powered By</span>
        <p className="text-3xl font-medium">DocuSign</p>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row justify-between gap-8 md:gap-[10%]">
        <Description />

        <CartTotalSupense />
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
