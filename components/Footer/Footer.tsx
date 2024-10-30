'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import BuilderMarks from '../Header/BuilderMarks'
import Image from 'next/image'

const Footer = () => {
  const path = usePathname()

  const showBuilderMarks =
    path.includes('/contract-builder') || path.includes('/docusign')
  const showFooterLogo = path.includes('/docusign')
  return (
    <div className="w-11/12  justify-center items-center flex flex-col gap-4 md:hidden ">
      {showBuilderMarks && <BuilderMarks />}
      {showFooterLogo && (
        <div className=" md:hidden">
          <Image
            src="/images/footer-logo.svg"
            width={52}
            height={26}
            alt="Footer Logo"
          />
        </div>
      )}
    </div>
  )
}

export default Footer
