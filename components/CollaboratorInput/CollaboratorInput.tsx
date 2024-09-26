import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const CollaboratorInput = () => {
  return (
    <div className="size-full grid grid-cols-12 gap-6">
      <div className="col-span-6 flex flex-col justify-end relative">
        <SubmitForm />
      </div>
      <div className="col-span-6 flex flex-col justify-center gap-3">
        <Descriptions />
      </div>
    </div>
  )
}

export default CollaboratorInput
