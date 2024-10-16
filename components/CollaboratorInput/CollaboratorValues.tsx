import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import CollaboratorTypeDropdown from './CollaboratorTypeDropdown'

const intoClass = 'font-share text-base/4 pb-1 text-[15px] text-grey'

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
      <CollaboratorTypeDropdown />
    </section>
  )
}

export default CollaboratorValues
