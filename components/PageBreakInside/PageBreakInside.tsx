import React from 'react'

const PageBreakInside = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        pageBreakInside: 'avoid',
      }}
    >
      {children}
    </div>
  )
}

export default PageBreakInside
