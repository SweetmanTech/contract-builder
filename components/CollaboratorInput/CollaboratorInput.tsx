import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const CollaboratorInput = () => {
  return (
    <div className="md:size-full flex gap-6">
      <div className="md:w-1/2 flex flex-col md:justify-end justify-start relative mb-16">
        <SubmitForm />
      </div>
      <div className="w-1/2 md:flex hidden flex-col justify-center gap-3">
        <Descriptions />
      </div>
    </div>
  )
}

export default CollaboratorInput
