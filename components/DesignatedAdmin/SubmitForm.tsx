import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import ReadHereLink from '../ReadHereLink'

const SubmitForm = () => {
  const { setTab, collaborators, adminName, setAdminName } =
    useContractBuilderProvider()

  return (
    <>
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        What is the name of the song?
      </p>
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        How many collaborators contributed to writing the song?
      </p>
      {collaborators.map((_, i) => (
        <p
          className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]"
          key={i}
        >
          Collaborator {i + 1}
        </p>
      ))}
      <p className="text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]">
        Do you want to designate an administrator?
      </p>
      <p className="text-white text-3xl tracking-[-0.05rem] font-share pt-6">
        {`What is the name(s) of the designated administrator?`}
      </p>
      <fieldset className="mt-6">
        <p className="font-share text-base/4 pb-2">{`Legal Name (First Last) | Separate names by commas`}</p>
        <input
          type="text"
          className="!outline-none font-rubik rounded-md border-white border !bg-transparent p-2"
          placeholder="NATE REID"
          onChange={(e) => setAdminName(e.target.value)}
          value={adminName}
        />
      </fieldset>
      <ReadHereLink
        link="/"
        label="Still not clear about designating an admin? read here."
        className="pt-10"
      />
      <Button
        className="mt-10 relative z-[2]"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SUCCESS)}
        disabled={Boolean(!adminName)}
      >
        SUBMIT
      </Button>
    </>
  )
}

export default SubmitForm
