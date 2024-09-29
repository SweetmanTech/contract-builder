import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import PassedQuestions from '../PassedQuestions'

const CreatedResult = () => {
  const { downloadUnsignedVersion } = useContractBuilderProvider()

  return (
    <section>
      <PassedQuestions className='hidden sm:block' />
      <p className="text-white font-share tracking-[-0.05rem] sm:pt-6 sm:text-3xl">
        Congrats! You´re protecting you art.
      </p>
      <p className="text-white font-rubik text-3xl pt-4 tracking-[-0.05rem]">
        DRAFT Contract Created!
      </p>
      <div className="pt-16 flex flex-col gap-8">
        <Button className="w-full max-w-[540px] py-1 text-md" onClick={() => { }}>
          View Contract
        </Button>
        <Button className="w-full max-w-[540px] py-1 text-md" onClick={downloadUnsignedVersion}>
          Download unsigned version
        </Button>
        <Button className="w-full max-w-[540px] py-1 text-md" onClick={() => { }}>
          Send docusign to collaborators
        </Button>
        <PassedQuestions className='mt-8 sm:hidden' />
      </div>
    </section>
  )
}

export default CreatedResult
