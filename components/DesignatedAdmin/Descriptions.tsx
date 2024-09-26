import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const Descriptions = () => {
  const { adminName } = useContractBuilderProvider()

  return (
    <>
      <p className="font-roboto_thin text-2xl">
        Your contract has yet to be completed. Continue to fill out the decision
        tree.
      </p>
      <p className="font-roboto_medium text-2xl">
        4. Designation of an administrator
      </p>
      <p className="font-roboto text-2xl">
        By means of the present contract, the parties recognize, accept, and
        declare that they designate{' '}
        <span className="text-danger-dark font-rubik">{adminName}</span> as the
        representative in charge of making the decisions related to the
        commercial exploitation of the musical work. The designated person will
        make their best effort to achieve the greatest commercial benefit of the
        work, which includes but is not limited to: offering licenses to the
        market, working with publishing companies, music distributors, record
        labels or synchronizations. The representative is NOT authorized to sell
        or dispose of the copyright ownership of the musical work, they can only
        offer licenses of use. The sale of copyrights is an exclusive faculty of
        each owner.
      </p>
    </>
  )
}

export default Descriptions
