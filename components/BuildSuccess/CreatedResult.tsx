import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'

const CreatedResult = () => {
  const { downloadUnsignedVersion } = useContractBuilderProvider()

  const intoClass =
    'text-grey text-xl tracking-[-0.05rem] font-share leading-[33px]'

  return (
    <section>
      <div>
        <p className={intoClass}>
          What type of splits contract would you like to create?
        </p>
        <p className={intoClass}>What is the name of the master recording?</p>
        <p className={intoClass}>
          How many collaborators are on the master recording?
        </p>
        <p className={intoClass}>Collaborator 1</p>
        <p className={intoClass}>Collaborator 2</p>
        <p className={intoClass}>What percentage of ownership...?</p>
      </div>
      <p className="text-white font-share text-3xl pt-6 tracking-[-0.05rem]">
        Congrats! You´re protecting you art.
      </p>
      <p className="text-white font-rubik text-3xl pt-4 tracking-[-0.05rem]">
        DRAFT Contract Created!
      </p>
      <div className="pt-16 flex flex-col gap-8">
        <Button className="py-1 text-md min-w-[540px]" onClick={() => {}}>
          View Contract
        </Button>
        <Button
          className="py-1 text-md min-w-[540px]"
          onClick={downloadUnsignedVersion}
        >
          Download unsigned version
        </Button>
        <Button className="py-1 text-md min-w-[540px]" onClick={() => {}}>
          Send docusign to collaborators
        </Button>
      </div>
    </section>
  )
}

export default CreatedResult
