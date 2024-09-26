import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const SplitsTypes = () => {
  return (
    <div className="size-full grid grid-cols-12">
      <div className="col-span-6 flex flex-col justify-end">
        <SubmitForm />
      </div>
      <div className="col-span-6 flex flex-col justify-center gap-3">
        <Descriptions />
      </div>
    </div>
  )
}

export default SplitsTypes
