const Descriptions = () => {
  const date = new Date()
  return (
    <>
      <p className="font-roboto_thin text-2xl">
        Your contract has yet to be completed. Continue to fill out the decision
        tree.
      </p>
      <p className="font-roboto_medium text-2xl">
        Copyright ownership agreement for Music composition, join work.
      </p>
      <p className="font-roboto text-2xl pt-6">
        This agreement is entered into on{' '}
        <span className="font-rubik text-danger-dark">
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </span>
      </p>
    </>
  )
}

export default Descriptions
