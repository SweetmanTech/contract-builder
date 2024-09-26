import SubmitForm from './SubmitForm'

const SplitsTypes = () => {
  return (
    <div className="size-full grid grid-cols-12">
      <div className="col-span-6 flex flex-col justify-end">
        <SubmitForm />
      </div>
      <div className="col-span-6"></div>
    </div>
  )
}

export default SplitsTypes
