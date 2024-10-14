import CreatedResult from './CreatedResult'
import Descriptions from './Descriptions'

const BuildSuccess = () => {
  return (
    <div className="md:size-full grid grid-cols-12 gap-6 mb-5">
      <div className="md:col-span-6 col-span-12 flex flex-col md:justify-end justify-start relative">
        <CreatedResult />
      </div>
      <div className="col-span-6 md:flex hidden flex-col justify-center gap-3 ">
        <Descriptions />
      </div>
    </div>
  )
}

export default BuildSuccess
