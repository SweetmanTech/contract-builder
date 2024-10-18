import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'

const UnsignedBoth = () => {
  const {
    splitType,
    governanceType,
    adminName,
    votePercentage,
    songName,
    collaborators,
  } = useContractBuilderProvider()

  return (
    <div
      className="w-full p-10 text-black text-lg flex flex-col justify-center pointer-events-none"
      id="unsigned-version"
    >
      <p className="font-rubik text-2xl text-center">
        Copyright ownership agreement for Musical Work and Master Recording,
        made as a joint work.
      </p>

      <p className="font-share mt-32 text-center">
        This agreement is entered into on _____________ between the following
        parties:
      </p>

      <p className="font-share pt-6 pl-10 font-bold">
        1. Parties and Musical Work Identification
      </p>

      <p className="font-share pt-8">
        The contracting parties have collaborated in the authorship and
        composition of the musical work titled _________________.
      </p>

      <p className="font-share pt-8">
        The parties acknowledge and accept their contribution to the authorship
        or composition of the Musical Work and agree to the distribution of
        copyright ownership as follows:
      </p>

      {collaborators.map((collaborator, index) => (
        <p key={index} className="font-share pt-2 pl-20">
          Collaborator {index + 1}: <br />
          <div className="flex items-center space-x-2">
            <span>Legal Name:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.legalName}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>Email address:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.email}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <span> Contribution</span>
            </div>

            <div className="w-32 border-b-2 border-black">
              {splitType === 'Song Writing' &&
                collaborator.typeOfSongWritingContribution}
              {splitType === 'Master Recording' &&
                collaborator.typeOfMasterContribution}
              {splitType === 'Both' && (
                <>
                  {collaborator.typeOfSongWritingContribution}
                  {collaborator.typeOfMasterContribution}
                </>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span> Ownership percentage:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.split} %
            </div>
          </div>
        </p>
      ))}

      <p className="font-share pt-6 pl-10 font-bold">
        2. Identification of Master Recording
      </p>

      <p className="font-share pt-8 pl-16">
        The contracting parties have collaborated in the recording and
        production of the Master Recording titled ________________________,
        which fixes a performance of the Musical Work identified in clause 1 of
        this agreement.
      </p>

      <p className="font-share pt-8 pl-16">
        The parties acknowledge and accept their contribution to the recording
        and production of the Master Recording and agree to the distribution of
        ownership as follows:
      </p>

      {collaborators.map((collaborator, index) => (
        <p key={index} className="font-share pt-2 pl-20">
          Collaborator {index + 1}: <br />
          <div className="flex items-center space-x-2">
            <span>Legal Name:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.legalName}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span>Email address:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.email}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <span> Contribution</span>
            </div>

            <div className="w-32 border-b-2 border-black">
              {splitType === 'Song Writing' &&
                collaborator.typeOfSongWritingContribution}
              {splitType === 'Master Recording' &&
                collaborator.typeOfMasterContribution}
              {splitType === 'Both' && (
                <>
                  {collaborator.typeOfSongWritingContribution}
                  {collaborator.typeOfMasterContribution}
                </>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span> Ownership percentage:</span>
            <div className="w-32 border-b-2 border-black">
              {collaborator.split} %
            </div>
          </div>
        </p>
      ))}

      <p className="font-share pt-6 pl-10 font-bold">
        3. Rights and duties of the parties.
      </p>

      <ul className="list-none pl-20 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">a</span>
          <p>
            The parties agree and accept the mutual assignment of copyright
            ownership in the proportions set forth in clauses 1 and 2 of this
            agreement for the Musical Work and Master Recording, respectively.
            Consequently, each of the parties receives for itself, in its
            patrimony, in perpetuity, and for the whole territory, all the
            rights, interests, and prerogatives granted by copyright ownership
            of the mentioned works, according to the law and to the present
            agreement.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">b</span>
          <p>
            The parties agree that the Musical Work is a Joint Work whose
            contributions either cannot be separated, or if they can be
            separated, they are interdependent and generate a single work. The
            ownership of the Musical Work in Collaboration is divided between
            the Contracting Parties in the percentages established in clause 1
            of the present contract.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">c</span>
          <p>
            None of the parties may perform legally relevant acts on the Musical
            Work without the written authorization of the XXXX% of the
            ownership, such as but not limited to the following:
          </p>
        </li>
      </ul>

      {/* subList */}
      <ul className="list-none pl-32 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">i.</span>
          <p>
            Authorizing derivative works, granting licenses, or licensing
            different kinds of uses.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">ii.</span>
          <p>
            Edit, alter or modify the Musical Work, especially the contributions
            of the other parties, in uses or sound recordings other than the one
            produced under this agreement, unless authorized verbally or in
            writing by the co-author.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">iii.</span>
          <p>
            Commercially exploiting the Musical Work in a manner that directly
            or indirectly suggests approval or endorsement of a product or
            service other than the Musical Work itself.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">iv.</span>
          <p>
            Grant exclusive or non-exclusive licenses on the Musical Work to
            third parties.
          </p>
        </li>
      </ul>

      <ul className="list-none pl-20 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">d</span>
          <p>
            The parties agree that the Master Recording is a Joint Work whose
            contributions either cannot be separated, or if they can be
            separated, they are interdependent and generate a single work. The
            ownership of the Master Recording in collaboration is divided
            between the Contracting Parties in the percentages established in
            clause 2 of the present contract.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">e</span>
          <p>
            None of the parties may perform legally relevant acts on the Master
            Recording without the written authorization of the XXXX% of the
            ownership, such as but not limited to the following:
          </p>
        </li>
      </ul>

      {/* subList */}
      <ul className="list-none pl-32 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">i.</span>
          <p>
            Exploiting the Sound Recording in a manner different from that set
            in the Master copy.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">ii.</span>
          <p>
            Authorizing derivative works or Editing, altering, or sampling the
            original Master Recording.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">iii.</span>
          <p>
            Commercially exploiting the Master Recording in a manner that
            directly or indirectly suggests approval or endorsement of a product
            or service other than the sound recording itself.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">iv.</span>
          <p>
            Grant exclusive or non-exclusive licenses on the Master Recording to
            third parties.
          </p>
        </li>
      </ul>

      <p className="font-share pt-6 pl-10 font-bold">
        4. Distribution and monetization of works
      </p>

      <ul className="list-none pl-20 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">a</span>
          <p>
            Parties agree and accept that they shall seek and select a
            competitive distributor or aggregator, which shall be responsible
            for making the works available to the public and shall collect and
            pay the respective royalties to each of the Musical Work and Master
            Recording copyright owners according to the proportions indicated in
            clauses 1 and 2 of this contract.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">b</span>
          <p>
            The parties agree that they will seek a distributor who will
            professionally and responsibly collect royalties for commercial
            exploitation of the Musical Work and Master Recording in the
            respective known and unknown uses. Such a distributor will pay each
            copyright owner in the proportions agreed upon in clauses 1 and 2 of
            this contract. In the event that the works have not been distributed
            with an aggregator that offers the service of direct payments to
            each of the copyright owners, the party that receives any sum of
            money for royalties belonging to another of the parties must pay
            them within 14 days in the respective bank account.
          </p>
        </li>
        <li className="flex items-start space-x-2 mt-4">
          <span className="font-bold">c</span>
          <p>
            In the event that any of the parties receives money from any third
            party attributable to the commercial exploitation of the Musical
            Work or Master Recording, such as synchronization licenses, or of
            any other type, the party receiving the money shall pay to the other
            parties the royalties corresponding to the pro rata of its
            participation in the copyright ownership, no later than fourteen
            (14) days after receiving the money.
          </p>
        </li>
      </ul>

      <p className="font-share pt-6 pl-10 font-bold">5. Credits </p>
      <p className="font-share pt-8 pl-16">
        a. The credits of each co-owner or collaborator shall be presented
        according to their corresponding role in each of the Musical Work and
        Master Recording, whether as author, composer, recording musician,
        producer, etc., and mentioning their legal or artistic name, as decided.
      </p>

      <p className="font-share pt-6 pl-10 font-bold">6. License for artists</p>
      <p className="font-share pt-8 pl-16">
        a. Each of the co owners is hereby granted a license to use the names of
        artists, approved portraits, and biographical material approved by each
        of the parties for the exclusive purpose of promoting and commercially
        exploiting the Musical Work and Master Recording. Each party shall have
        the right to approve any biographical or identification materials
        selected or commissioned by the other, provided that such consent to the
        Biographical Materials is not unreasonably withheld or delayed. In the
        event of unreasonable delay, approval shall be deemed granted within
        five (5) business days of the date such Biographical Materials are
        received by the party required to grant approval.
      </p>

      <p className="font-share pt-6 pl-10 font-bold">7. Accounting</p>

      <ul className="list-none pl-20 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">a</span>
          <p>
            Each party has the right to engage a certified public accountant to
            audit the books and records of the other parties solely to verify
            the receipt and payment of monies derived from the Musical Work and
            Master Recording. This audit right may be exercised to verify the
            accuracy of such statements twice a year, at the sole expense of the
            party concerned and upon at least thirty (30) days prior written
            notice. Any objection relating to any financial statement must be
            filed no later than three years from the date of inspection.
          </p>
        </li>
      </ul>

      <p className="font-share pt-6 pl-10 font-bold">
        8. Full capacity and indemnity against third parties.
      </p>

      <ul className="list-none pl-20 pt-8">
        <li className="flex items-start space-x-2">
          <span className="font-bold">a</span>
          <p>
            The parties acknowledge and declare that each of them has the
            capacity to contract and does so freely, without any restriction or
            prohibition whatsoever, including restrictions derived from record,
            publishing or representation agreements with any third party.
          </p>
        </li>

        <li className="flex items-start space-x-2">
          <span className="font-bold">b</span>
          <p>
            The parties also declare that all their contributions to the Musical
            Work and Master Recording are original and do not infringe on the
            economic or moral rights or interests of third parties.
          </p>
        </li>

        <li className="flex items-start space-x-2">
          <span className="font-bold">c</span>
          <p>
            The parties agree that in the event of any claim by third parties
            for copyright or otherwise, the responsible party shall hold
            harmless the non-responsible parties from any judicial or
            extrajudicial claim arising out of its contribution to the Musical
            Work and Master Recording, or out of its participation in or
            performance of this contract.
          </p>
        </li>
      </ul>

      <p className="font-share pt-6 pl-10 font-bold">
        9. Full autonomy and no employment relationship
      </p>
      <p className="font-share pt-8 pl-16">
        The parties understand, acknowledge, and declare that no employment
        relationship exists between them. They act as independent artists with
        full administrative and artistic autonomy. Nothing in this contract
        shall be construed as an employment, partnership or business
        relationship other than collaboration between artists for the production
        of a joint artistic work.
      </p>

      <p className="font-share pt-6 pl-10 font-bold">
        10. Right of first refusal{' '}
      </p>
      <p className="font-share pt-8 pl-16">
        Parties agree that in the event they wish to sell or otherwise dispose
        of or transfer their ownership in the copyrights of the Musical Work and
        Master Recording, they shall grant to the other parties a right of first
        refusal or first option to purchase to the other parties to the
        contract, first on a pro rata basis, and secondly on an individual
        basis. In the event that the purchase option is not exercised by the
        other parties, the seller may freely offer its share to the market.
      </p>

      <p className="font-share pt-6 pl-10 font-bold">11. Notices</p>
      <p className="font-share pt-8 pl-16">
        The parties will be notified of any decision, controversy, negotiation
        or relevant matter related to this contract, via email or certified
        physical mail at the physical and electronic addresses that appear at
        the bottom of their signature.
      </p>

      <p className="font-share pt-6 pl-10 font-bold">12. Dispute settlement</p>
      <p className="font-share pt-8 pl-16">
        Any controversy will be dealt with through dialogue between the parties.
        Failing this, they will seek to exhaust an alternative dispute
        resolution mechanism, and failing this, they will submit it to the
        competent judges under the laws of the United States of America.
      </p>

      <p className="font-share pt-8 pl-16">
        If any provision of this Agreement is invalid, void or unenforceable,
        the remainder of the Agreement shall remain in full force and effect.
        This Agreement may not be modified in any way except by an instrument
        signed by the parties. This Agreement may be signed in duplicate (and/or
        facsimile and/or PDF), each of which shall be deemed an original, but
        all of which together shall constitute the Agreement.
      </p>

      <p className="font-share pt-8 pl-16">
        In witness whereof, the collaborators sign:
      </p>

      {collaborators.map((collaborator, index) => (
        <p key={index} className="font-share pt-2 pl-20">
          Collaborator {index + 1}: <br />
          Legal Name:{' '}
          <span className="underline">{collaborator.legalName}</span> <br />
          Home address: <span className="underline">XYZ</span>
          <br />
          <br />
          <div>
            <div className="inline-block bg-blue-500 p-4">
              Signature: :___________________________{' '}
            </div>
            <div className="inline-block bg-green-500 p-4">
              Date: :___________________________
            </div>
          </div>
        </p>
      ))}
    </div>
  )
}

export default UnsignedBoth
