import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const intoClass = 'font-share text-base/4 pb-1 text-[15px] text-[#696969]'
const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer']
const songWritingOptions = ['Lyrics', 'Music', 'Both']

const CollaboratorValues = () => {
  const {
    setLegalName,
    collaborators,
    currentCollaborator,
    setEmail,
    setSplit,
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution
  } = useContractBuilderProvider()

  const [isOpen, setIsOpen] = useState(false)
  const [songwritingContribution, setSongwritingContribution] =
    useState('Select an option')

  const handleSongWritingClick = (option: string) => {
    setSongwritingContribution(option)
    setIsOpen(false)
    setTypeOfSongWritingContribution(option)
  }

  const [isOpen2, setIsOpen2] = useState(false)
  const [masterContribution, setMasterContribution] =
    useState('Select an option')

  const handleMasterClick = (option: string) => {
    setMasterContribution(option)
    setIsOpen2(false)
    setTypeOfMasterContribution(option)
  }


  // const [isOpen, setIsOpen] = useState(false);
  // const [songwritingContribution, setSongwritingContribution] = useState('Select an option');

  // const songWritingOptions = ['Lyrics', 'Music', 'Both'];

  // const handleSongWritingClick = (option: string) => {
  //   setSongwritingContribution(option);
  //   setIsOpen(false);
  //   setTypeOfSongWritingContribution(option);
  // };







  // const [isOpen2, setIsOpen2] = useState(false);
  // const [masterContribution, setMasterContribution] = useState('Select an option');

  // const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer'];

  // const handleOptionClick2 = (option: string) => {
  //   setSelectedOption2(option);
  //   setIsOpen2(false);
  // };

  // const handleMasterClick = (option: string) => {
  

  //   setMasterContribution(option);
  //   setIsOpen2(false);
  //   setTypeOfMasterContribution(option);
  // };


  return (
    <section className="flex mt-6 flex-col gap-4">
      <div className="flex gap-2">
        <fieldset className="w-8/12">
          <p className={intoClass}>{`Legal Name (First Last)`}</p>
          <input
            type="text"
            className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2  w-full"
            placeholder="Patrick Kielb"
            onChange={(e) => setLegalName(e.target.value)}
            value={collaborators[currentCollaborator].legalName}
          />
        </fieldset>
        <fieldset className="w-4/12">
          <p className={intoClass}>{`Split (%)`}</p>
          <input
            type="number"
            className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 w-full"
            placeholder="MANAGEMENT@PICERECORDS.COM"
            onChange={(e) => setSplit(parseInt(e.target.value, 10))}
            value={collaborators[currentCollaborator].split}
          />
        </fieldset>
      </div>
      <fieldset className="w-full">
        <p className={intoClass}>{`Email (example@mesawallet.io)`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 w-full"
          placeholder="MANAGEMENT@PICERECORDS.COM"
          onChange={(e) => setEmail(e.target.value)}
          value={collaborators[currentCollaborator].email}
        />
      </fieldset>
     



      <div className="flex gap-2">
      <fieldset className='w-6/12'>
      <p className={intoClass}>{`Songwriting Contribution`}</p>
      <div className="relative inline-block w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer"
      >
        {songwritingContribution}
        <ChevronDownIcon className="h-5 w-5 text-white" /> {/* Arrow Icon */}
      </button>

      {isOpen && (
        <ul className="absolute w-full bg-black text-white mt-2 rounded-md shadow-lg opacity-100 block border-2 border-white z-[9999]">
          {songWritingOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSongWritingClick(option)}
              className="p-2 hover:bg-white hover:text-[#ac4444] text-[#9ca3af] cursor-pointer transition-colors duration-200 !outline-none font-rubik rounded-md !bg-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
 
      </fieldset>
      <fieldset className='w-6/12'>
      <p className={intoClass}>{`Master Contribution`}</p>
      <div className="relative inline-block w-full">
      <button
        onClick={() => setIsOpen2(!isOpen2)}
        className="flex justify-between items-center w-full text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer"
      >
        {masterContribution}
        <ChevronDownIcon className="h-5 w-5 text-white" /> {/* Arrow Icon */}
      </button>

      {isOpen2 && (
        <ul className="absolute w-full bg-black text-white mt-2 rounded-md shadow-lg opacity-100 block border-2 border-white z-[9999]">
          {masterOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleMasterClick(option)}
              className="p-2 hover:bg-white hover:text-[#ac4444] text-[#9ca3af] cursor-pointer transition-colors duration-200 !outline-none font-rubik rounded-md !bg-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
        </fieldset>
        </div>
    </section>
  )
}

export default CollaboratorValues
