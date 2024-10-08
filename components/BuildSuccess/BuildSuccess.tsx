import UnsignedVersion from '../UnsignedVersion'
import CreatedResult from './CreatedResult'
import Descriptions from './Descriptions'

const BuildSuccess = () => {
  return (
    <div className="size-full grid grid-cols-12 gap-8">
      <div className="col-span-6 flex flex-col">
        <CreatedResult />
      </div>
      <div className="col-span-6 flex flex-col pt-40 gap-3 h-fit">
        <Descriptions />
      </div>
    </div>
  )
}

export default BuildSuccess
