import React from 'react'

const Description = () => {
  const description = `With this option, the contract will be automatically sent out through DocuSign to all collaborators on the project within 48 hours. Once everyone has completed signing, all parties will be able to download the fully signed contracts to ensure proper protection.`
  return (
    <div className="font-share w-full md:w-4/5 self-start flex flex-col gap-10">
      <p className="md:text-[32px] md:leading-[48px] text-left">
        {description}
      </p>
    </div>
  )
}

export default Description
