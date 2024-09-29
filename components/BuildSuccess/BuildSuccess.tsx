import CreatedResult from './CreatedResult'
import Descriptions from './Descriptions'

const BuildSuccess = () => {
  return (
    <div className="size-full grid grid-cols-12 sm:gap-8">
      <div className="col-span-12 flex flex-col sm:col-span-6">
        <CreatedResult />
      </div>
      <div className="col-span-6 h-fit hidden flex-col pt-40 gap-3 sm:flex">
        <Descriptions />
      </div>
    </div>
  )
}

export default BuildSuccess
