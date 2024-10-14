import React, { useState } from 'react';
import { DropdownList } from './DropdownList'; // Import the reusable component
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider';

const masterOptions = ['Artist', 'Producer', 'Executive producer', 'Engineer'];
const songWritingOptions = ['Lyrics', 'Music', 'Both'];

export function CollaboratorTypeDropdown() {
  const {
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution,
  } = useContractBuilderProvider();

  const [songwritingContribution, setSongwritingContribution] = useState('Select an option');
  const [masterContribution, setMasterContribution] = useState('Select an option');

  return (
    <div className="flex gap-2">
      <DropdownList
        label="Songwriting Contribution"
        options={songWritingOptions}
        selectedOption={songwritingContribution}
        onOptionSelect={(option) => {
          setSongwritingContribution(option);
          setTypeOfSongWritingContribution(option);
        }}
      />
      <DropdownList
        label="Master Contribution"
        options={masterOptions}
        selectedOption={masterContribution}
        onOptionSelect={(option) => {
          setMasterContribution(option);
          setTypeOfMasterContribution(option);
        }}
      />
    </div>
  );
}
