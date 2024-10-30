import React from 'react'
import { useModalProvider } from '@/providers/ModalProvider'
import ReadHereLink from '@/components/ReadHereLink'

const Description = () => {
  const { setIsDocuSignModalOpen } = useModalProvider()

  return (
    <div className="font-share w-full md:w-4/5 self-start flex flex-col gap-10">
      <p className="md:text-[32px] md:leading-[48px] text-center md:text-left">
        With this option, contracts will be automatically sent out through
        DocuSign to all collaborators on the project with 72 hours. Once all the
        collaborators have completed signing, you will have the ability to
        download the fully signed contract for all artists protection!
      </p>
      <ReadHereLink
        open={() => setIsDocuSignModalOpen(true)}
        label="Why does this cost money?"
        className="pt-0 hidden md:block"
      />
    </div>
  )
}

export default Description
