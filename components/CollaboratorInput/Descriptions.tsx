import { splitTypes } from '@/lib/constants/splitTypes'
import { getCollaboratorsFields } from '@/lib/getCollaboratorsFields'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const Descriptions = () => {
  const { collaborators, currentCollaborator, splitType } =
    useContractBuilderProvider()
  const collaboratorFields = getCollaboratorsFields({
    currentCollaborator: collaborators[currentCollaborator],
    splitType,
  })
  const heading = splitTypes.find((item) => item.type === splitType)
    ?.collaboratorInfoText?.heading
  const text = splitTypes.find((item) => item.type === splitType)
    ?.collaboratorInfoText?.text
  return (
    <>
      <p className="font-roboto_thin text-2xl">
        Your contract has yet to be completed. Continue to fill out the decision
        tree.
      </p>
      <p className="font-roboto_medium text-2xl">{heading}</p>
      <p className="font-roboto text-2xl">{text}</p>
      <p className="font-roboto_medium text-2xl mt-4">
        Collaborator {currentCollaborator + 1}:
      </p>
      {collaboratorFields.map(([label, value]) => (
        <p key={label} className="font-roboto text-2xl">
          {label}:{' '}
          <span className="text-danger-dark font-extrabold font-rubik">
            {value}
          </span>
        </p>
      ))}
    </>
  )
}

export default Descriptions
