import CreatedResult from './CreatedResult'

const BuildSuccess = () => {
  return (
    <div className="size-full grid grid-cols-12">
      <div className="col-span-6 flex flex-col">
        <CreatedResult />
      </div>
      <div className="col-span-6 flex flex-col justify-center gap-3"></div>
    </div>
  )
}

export default BuildSuccess
