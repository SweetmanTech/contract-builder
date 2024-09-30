import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const CollaboratorInput = () => {
  return (
    <div className="size-full grid grid-cols-12 sm:gap-6">
      <div className="col-span-12 flex flex-col relative sm:col-span-6 sm:justify-end">
        <SubmitForm />
      </div>
      <div className="col-span-6 hidden flex-col justify-center gap-3 sm:flex">
        <Descriptions />
      </div>
    </div>
  )
}

export default CollaboratorInput
