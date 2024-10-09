import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const SplitsTypes = () => {
  return (
    <div className="size-full  grid md:grid-cols-12">
      <div className="col-span-6 flex flex-col md:justify-end justify-start mt-4">
        <SubmitForm />
      </div>
      <div className="col-span-6  flex-col justify-center gap-3 hidden md:flex">
        <Descriptions />
      </div>
      <div className="col-span-6  flex-col justify-center gap-3 block md:hidden">
          <h3 className='font-rubik text-[13px]'> Tap Question to Return:</h3>
          <p className='text-[16px] text-[#A3A3A3]'>What type of splits contract would you like to create?</p>
      </div>
    </div>
  )
}

export default SplitsTypes
