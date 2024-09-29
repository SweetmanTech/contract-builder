import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const GovernanceTypes = () => {
  return (
    <div className="size-full grid grid-cols-12 sm:gap-4">
      <div className="col-span-12 flex flex-col sm:col-span-6 sm:justify-end">
        <SubmitForm />
      </div>
      <div className="col-span-6 hidden flex-col justify-center gap-3 sm:flex">
        <Descriptions />
      </div>
    </div>
  )
}

export default GovernanceTypes
