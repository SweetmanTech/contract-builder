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
    <fieldset className="mt-6 max-w-[550px] space-y-4">
      <label className='block'>
        <span className="block pb-1 font-share text-base/4">Legal Name (First Last)</span>
        <input
          type="text"
          className="w-full rounded-md border border-white !bg-transparent p-2 font-rubik !outline-none"
          placeholder="Patrick Kielb"
          onChange={(e) => setLegalName(e.target.value)}
          value={collaborators[currentCollaborator].legalName}
        />
      </label>
      <label className='block'>
        <span className="block pb-1 font-share text-base/4">Email (example@mesawallet.io)</span>
        <input
          type="text"
          className="w-full rounded-md border border-white !bg-transparent p-2 font-rubik !outline-none"
          placeholder="MANAGEMENT@PICERECORDS.COM"
          onChange={(e) => setEmail(e.target.value)}
          value={collaborators[currentCollaborator].email}
        />
      </label>
      <div className="flex items-end gap-2">
        <label className='block'>
          <span className="block pb-1 font-share text-base/4">Type of contribution</span>
          <input
            type="text"
            className="w-full max-w-[240px] rounded-md border border-white !bg-transparent p-2 font-rubik !outline-none"
            placeholder="MUSIC"
            onChange={(e) => setTypeOfContribution(e.target.value)}
            value={collaborators[currentCollaborator].typeOfcontribution}
          />
        </label>
        <label className='block'>
          <span className="block pb-1 font-share text-base/4">Split (%)</span>
          <input
            type="number"
            className="max-w-[100px] rounded-md border border-white !bg-transparent p-2 font-rubik !outline-none"
            placeholder="0"
            onChange={(e) => setSplit(parseInt(e.target.value, 10))}
            value={collaborators[currentCollaborator].split}
          />
        </label>
      </div>
    </fieldset>
  )
}

export default CollaboratorValues
