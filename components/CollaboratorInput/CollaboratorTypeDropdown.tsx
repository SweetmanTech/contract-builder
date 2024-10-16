import React from 'react'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from '@/components/ui/dropdown'
import { ChevronDownIcon } from 'lucide-react'

const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer']
const songWritingOptions = ['Lyrics', 'Music', 'Both']

export function CollaboratorTypeDropdown() {
  const {
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution,
    splitType,
    collaborators,
    currentCollaborator,
  } = useContractBuilderProvider()
  const { typeOfMasterContribution, typeOfSongWritingContribution } =
    collaborators[currentCollaborator]

  return (
    <fieldset className="w-full">
      <p className="font-share text-base/4 pb-1 text-[15px] text-[#696969]">
        {`${splitType === 'Both' ? 'Both' : 'Type of'} contribution`}
      </p>
      <div className="flex gap-2">
        {(splitType === 'Master Recording' || splitType === 'Both') && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex justify-between w-1/2 items-center text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer">
                {typeOfMasterContribution
                  ? typeOfMasterContribution
                  : 'Select options'}
                <ChevronDownIcon className="size-5 text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-black w-80 font-rubik">
              <DropdownMenuRadioGroup
                value={typeOfMasterContribution}
                onValueChange={setTypeOfMasterContribution}
              >
                {masterOptions.map((option) => (
                  <DropdownMenuRadioItem key={option} value={option}>
                    {option}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {(splitType === 'Song Writing' || splitType === 'Both') && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex justify-between w-1/2 items-center text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer">
                {typeOfSongWritingContribution
                  ? typeOfSongWritingContribution
                  : 'Select options'}
                <ChevronDownIcon className="size-5 text-white" />
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-black w-80 font-rubik">
              <DropdownMenuRadioGroup
                value={typeOfSongWritingContribution}
                onValueChange={setTypeOfSongWritingContribution}
              >
                {songWritingOptions.map((option) => (
                  <DropdownMenuRadioItem key={option} value={option}>
                    {option}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </fieldset>
  )
}
