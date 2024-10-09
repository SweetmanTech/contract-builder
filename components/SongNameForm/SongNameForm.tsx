import Descriptions from './Descriptions'
import SubmitForm from './SubmitForm'

const SongNameForm = () => {
  return (
    <div className="size-full grid grid-cols-12 gap-6">
      <div className="md:col-span-6 col-span-12 flex flex-col md:justify-end justify-start relative">
        <SubmitForm />
      </div>
      <div className="col-span-6  flex-col justify-center gap-3 hidden md:flex">
        <Descriptions />
      </div>
      <div className="col-span-12  flex-col justify-center gap-3 block md:hidden">
          <h3 className='font-rubik text-[13px]'> Tap Question to Return:</h3>
          <p className='text-[16px] text-[#A3A3A3]'>What type of splits contract would you like to create?</p>
      </div>
    </div>
  )
}

export default SongNameForm
