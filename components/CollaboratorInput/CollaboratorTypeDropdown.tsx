import React, { useState } from 'react'
import { DropdownList } from './DropdownList'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer']
const songWritingOptions = ['Lyrics', 'Music', 'Both']

export function CollaboratorTypeDropdown() {
  const {
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution,
    splitType,
  } = useContractBuilderProvider()

  const [selectedSongwritingContributions, setSelectedSongwritingContributions] = useState<string[]>([]);
  const [selectedMasterContributions, setSelectedMasterContributions] = useState<string[]>([]);

  return (
    <div className="flex gap-2">

      {splitType === "Master Recording" && (
         <DropdownList
         label="Type of contribution"
         options={masterOptions}
         selectedOptions={selectedMasterContributions}
         onOptionSelect={(option) => {
           setSelectedMasterContributions([...selectedMasterContributions, option]);
           setTypeOfMasterContribution(option);
         }}
         onOptionDeselect={(option) => {
           setSelectedMasterContributions(selectedMasterContributions.filter(o => o !== option));
          
         }}
       />
      )}

      {splitType === "Song Writing" && (
       <DropdownList
       label="Type of contribution"
       options={songWritingOptions}
       selectedOptions={selectedSongwritingContributions}
       onOptionSelect={(option) => {
         setSelectedSongwritingContributions([...selectedSongwritingContributions, option]);
         setTypeOfSongWritingContribution(option);
       }}
       onOptionDeselect={(option) => {
         setSelectedSongwritingContributions(selectedSongwritingContributions.filter(o => o !== option));
        
       }}
     />
      )}
      
      {splitType === "Both" && (
     <>
       <DropdownList
       label="Songwriting Contribution"
       options={songWritingOptions}
       selectedOptions={selectedSongwritingContributions}
       onOptionSelect={(option) => {
         setSelectedSongwritingContributions([...selectedSongwritingContributions, option]);
         setTypeOfSongWritingContribution(option);
       }}
       onOptionDeselect={(option) => {
         setSelectedSongwritingContributions(selectedSongwritingContributions.filter(o => o !== option));
        
       }}
     />

     <DropdownList
         label="Master Contribution"
         options={masterOptions}
         selectedOptions={selectedMasterContributions}
         onOptionSelect={(option) => {
           setSelectedMasterContributions([...selectedMasterContributions, option]);
           setTypeOfMasterContribution(option);
         }}
         onOptionDeselect={(option) => {
           setSelectedMasterContributions(selectedMasterContributions.filter(o => o !== option));
          
         }}
       />
     </>
      )}
     
    </div>
  )
}
