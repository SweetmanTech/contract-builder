import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Button from '../Button'
import PassedQuestions from '../PassedQuestions'

const CreatedResult = () => {
  const {
    collaborators,
    currentCollaborator,
    splitType,
    downloadMasterVersion,
    downloadSongwritingVersion,
    downloadBothVersion,
  } = useContractBuilderProvider()
  const downloadPdf = () => {
    if (splitType === 'Song Writing') {
      console.log('SongWriting called')
      downloadSongwritingVersion()
    } else if (splitType === 'Master Recording') {
      downloadMasterVersion()
    } else if (splitType === 'Both') {
      downloadBothVersion()
    }
  }
  return (
    <section className="flex flex-col">
      <div className="md:block hidden">
        <PassedQuestions />
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
        <Button
          className="py-1 md:px-[16px] px-[10px] md:text-md text-[11px] md:min-w-[540px]  min-w-[312px] min-h-[41px]"
          onClick={() => {}}
        >
          View Contract
        </Button>
        <Button
          className="py-1 md:text-md text-[11px] md:min-w-[540px] min-w-[312px] min-h-[41px]"
          onClick={downloadPdf}
        >
          Download unsigned version
        </Button>
        <Button
          className="py-1 md:text-md text-[11px] md:min-w-[540px] min-w-[312px] min-h-[41px]"
          onClick={() => {}}
        >
          Send DocuSign to collaborators
        </Button>
      </div>
    </section>
  )
}

export default CreatedResult
