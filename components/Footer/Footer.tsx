'use client';

import { usePathname } from 'next/navigation';
import React from 'react'
import BuilderMarks from '../Header/BuilderMarks';

const Footer = () => {
    const isBuilder = usePathname().includes('/contract-builder');
  return (
    <div className='w-11/12  justify-center items-center flex md:hidden '>
         {isBuilder && (
          <BuilderMarks />
      )}
    </div>
  )
}

export default Footer