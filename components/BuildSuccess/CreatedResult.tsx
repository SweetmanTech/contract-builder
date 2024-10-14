import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'

const CreatedResult = () => {
  const { downloadUnsignedVersion } = useContractBuilderProvider()

  const intoClass =
    'text-grey text-xl tracking-[-0.05rem] font-share leading-[33px] text-[22px]'

  return (
<section className='flex flex-col'>
  <div className="order-3 md:order-1">
  <div className='md:hidden  block '>
  <h4 className='font-rubik text-[13px] mb-3 mt-4 '>Tap Question to Return:</h4>
  </div>
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

  <div className="order-1 md:order-2 flex flex-col">
    <p className="text-white font-share md:text-[32px] text-[16px] md:pt-6 tracking-[-0.05rem] md:order-1 order-2">
      Congrats! You’re protecting your art.
    </p>
    <p className="text-white font-rubik  md:text-[32px] text-[19px] pt-4 tracking-[-0.05rem] md:order-2 order-1 ">
      DRAFT Contract Created!
    </p>
  </div>

  <div className="md:pt-16 pt-8 flex flex-col gap-8 order-2 md:order-3 md:justify-start justify-center md:items-start items-center mb-5">
    <Button className="py-1 md:px-[16px] px-[10px] md:text-md text-[11px] md:min-w-[540px]  min-w-[312px] min-h-[41px]" onClick={() => {}}>
      View Contract
    </Button>
    <Button className="py-1 md:text-md text-[11px] md:min-w-[540px] min-w-[312px] min-h-[41px]" onClick={downloadUnsignedVersion}>
       Download unsigned version
    </Button>
    <Button className="py-1 md:text-md text-[11px] md:min-w-[540px] min-w-[312px] min-h-[41px]" onClick={() => {}}>
      Send DocuSign to collaborators
    </Button>
  </div>
</section>

  )
}

export default CreatedResult
