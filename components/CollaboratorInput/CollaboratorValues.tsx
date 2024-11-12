import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CollaboratorTypeDropdown from './CollaboratorTypeDropdown'
import FormInput from '../FormInput'

const intoClass =
  'font-share text-base/4 flex flex-col gap-1 text-[15px] text-grey'
const inputClass =
  'font-roboto_bold rounded-md tracking-wide border-white border !bg-transparent p-2 w-full'
const CollaboratorValues = () => {
  const {
    setLegalName,
    collaborators,
    currentCollaborator,
    setEmail,
    setSplit,
  } = useContractBuilderProvider()

  return (
    <section className="flex mt-6 flex-col gap-4">
      <div className="flex gap-2">
        <fieldset className="w-8/12">
          <FormInput
            className={inputClass}
            value={collaborators[currentCollaborator].legalName}
            label="Legal Name (First Last)"
            handleChange={(e) => setLegalName(e.target.value)}
            labelProps={{
              htmlFor: 'legalName',
              className: intoClass,
            }}
          />
        </fieldset>
        <fieldset className="w-4/12">
          <FormInput
            className={inputClass}
            value={collaborators[currentCollaborator].split}
            label="Split %"
            handleChange={(e) => setSplit(parseInt(e.target.value, 10))}
            labelProps={{
              htmlFor: 'split',
              className: intoClass,
            }}
          />
        </fieldset>
      </div>
      <fieldset className="w-full">
        <FormInput
          className={inputClass}
          value={collaborators[currentCollaborator].email}
          label="Email"
          handleChange={(e) => setEmail(e.target.value)}
          labelProps={{
            htmlFor: 'email',
            className: intoClass,
          }}
        />
      </fieldset>
      <CollaboratorTypeDropdown />
    </section>
  )
}

export default CollaboratorValues
