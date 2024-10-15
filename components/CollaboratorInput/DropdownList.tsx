import React, { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export interface DropdownListProps {
  label: string
  options: string[]
  selectedOptions: string[]
  onOptionSelect: (option: string) => void
  onOptionDeselect: (option: string) => void
}

export const DropdownList: React.FC<DropdownListProps> = ({
  label,
  options,
  selectedOptions,
  onOptionSelect,
  onOptionDeselect,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <fieldset className="w-6/12">
      <p className="font-share text-base/4 pb-1 text-[15px] text-[#696969]">
        {label}
      </p>
      <div className="relative inline-block w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full text-left bg-black text-[#9ca3af] font-rubik rounded-md border-white border p-2 cursor-pointer"
        >
          {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select options'}
          <ChevronDownIcon className="size-5 text-white" />
        </button>

        {isOpen && (
          <ul className="absolute w-full bg-black text-white mt-2 rounded-md shadow-lg opacity-100 block border-2 border-white z-[9999]">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => {
                  if (selectedOptions.includes(option)) {
                    onOptionDeselect(option); // Deselect option if already selected
                  } else {
                    onOptionSelect(option); // Select option if not selected
                  }
                  setIsOpen(false); // Close the dropdown after selection
                }}
                className={`p-2 cursor-pointer transition-colors duration-200 !outline-none font-rubik rounded-md !bg-black ${
                  selectedOptions.includes(option) ? 'bg-white text-[#ac4444]' : 'text-[#9ca3af]'
                }`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </fieldset>
  )
}
