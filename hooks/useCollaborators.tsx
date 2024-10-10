import { COLLABORATOR } from '@/types/collaborator'
import { useState } from 'react'

const useCollaborators = () => {
  const [collaboratorsAmount, setCollaboratorsAmount] = useState(0)
  const [collaborators, setCollaborators] = useState<COLLABORATOR[]>([
    {
      legalName: '',
      email: '',
      typeOfSongwritingcontribution: '',
      typeOfMastercontribution: '',
      split: 0,
    },
  ])
  const [currentCollaborator, setCurrentCollaborator] = useState(0)

  const setCollaborator = () => {
    const temp = [...collaborators]
    temp.push({
      legalName: '',
      email: '',
      typeOfSongwritingcontribution: '',
      typeOfMastercontribution: '',
      split: 0,
    })
    setCollaborators(temp)
    setCurrentCollaborator(currentCollaborator + 1)
  }

  const setLegalName = (value: string) => {
    const temp = [...collaborators]
    temp[currentCollaborator].legalName = value
    setCollaborators(temp)
  }

  const setEmail = (value: string) => {
    const temp = [...collaborators]
    temp[currentCollaborator].email = value
    setCollaborators(temp)
  }

  const setTypeOfSongWritingContribution = (value: string) => {
    const temp = [...collaborators]
    temp[currentCollaborator].typeOfSongwritingcontribution = value
    setCollaborators(temp)
  }

  const setTypeOfMasterContribution = (value: string) => {
    const temp = [...collaborators]
    temp[currentCollaborator].typeOfMastercontribution = value
    setCollaborators(temp)
  }



  const setSplit = (value: number) => {
    const temp = [...collaborators]
    temp[currentCollaborator].split = value
    setCollaborators(temp)
  }

  return {
    collaboratorsAmount,
    setCollaboratorsAmount,
    collaborators,
    setCollaborators,
    currentCollaborator,
    setCurrentCollaborator,
    setLegalName,
    setEmail,
    // setTypeOfContribution,
    setTypeOfMasterContribution,
    setTypeOfSongWritingContribution,
    setSplit,
    setCollaborator,
  }
}

export default useCollaborators
