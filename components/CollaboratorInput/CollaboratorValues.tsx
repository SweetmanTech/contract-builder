import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const CollaboratorValues = () => {
  const {
    setLegalName,
    collaborators,
    currentCollaborator,
    setEmail,
    setSplit,
    setTypeOfContribution,
  } = useContractBuilderProvider()

  return (
    <section className="flex mt-6 flex-col gap-4">
      <fieldset>
        <p className="font-share text-base/4 pb-1">{`Legal Name (First Last)`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2"
          placeholder="Patrick Kielb"
          onChange={(e) => setLegalName(e.target.value)}
          value={collaborators[currentCollaborator].legalName}
        />
      </fieldset>
      <fieldset>
        <p className="font-share text-base/4 pb-1">{`Email (example@mesawallet.io)`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2"
          placeholder="MANAGEMENT@PICERECORDS.COM"
          onChange={(e) => setEmail(e.target.value)}
          value={collaborators[currentCollaborator].email}
        />
      </fieldset>
      <div className="flex gap-2">
        <fieldset>
          <p className="font-share text-base/4 pb-1">{`Type of contribution`}</p>
          <input
            type="text"
            className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[200px]"
            placeholder="MANAGEMENT@PICERECORDS.COM"
            onChange={(e) => setTypeOfContribution(e.target.value)}
            value={collaborators[currentCollaborator].typeOfcontribution}
          />
        </fieldset>
        <fieldset>
          <p className="font-share text-base/4 pb-1">{`Split (%)`}</p>
          <input
            type="number"
            className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2 max-w-[100px]"
            placeholder="MANAGEMENT@PICERECORDS.COM"
            onChange={(e) => setSplit(parseInt(e.target.value, 10))}
            value={collaborators[currentCollaborator].split}
          />
        </fieldset>
      </div>
    </section>
  )
}

export default CollaboratorValues
