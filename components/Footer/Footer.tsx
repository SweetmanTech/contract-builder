'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import BuilderMarks from '../Header/BuilderMarks'

const Footer = () => {
  const path = usePathname()

  const showBuilderMarks =
    path.includes('/contract-builder') || path.includes('/docusign')
  return (
    <div className="w-11/12  justify-center items-center flex md:hidden ">
      {showBuilderMarks && <BuilderMarks />}
    </div>
  )
}

export default Footer
