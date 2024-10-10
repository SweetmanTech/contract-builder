import { COLLABORATOR } from '@/types/collaborator'
import { useState } from 'react'

const useCollaborators = () => {
  const [collaboratorsAmount, setCollaboratorsAmount] = useState(0)
  const [collaborators, setCollaborators] = useState<COLLABORATOR[]>([
    {
      legalName: '',
      email: '',
      typeOfcontribution: '',
      split: 0,
    },
  ])
  const [currentCollaborator, setCurrentCollaborator] = useState(0)

  const setCollaborator = () => {
    const temp = [...collaborators]
    temp.push({
      legalName: '',
      email: '',
      typeOfcontribution: '',
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

  const setTypeOfContribution = (value: string) => {
    const temp = [...collaborators]
    temp[currentCollaborator].typeOfcontribution = value
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
    setTypeOfContribution,
    setSplit,
    setCollaborator,
  }
}

export default useCollaborators
