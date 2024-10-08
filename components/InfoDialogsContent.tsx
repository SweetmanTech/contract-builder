import { useState } from 'react'
import InfoDialog from './InfoDialog'
import ReadHereLink from './ReadHereLink'

export const SplitsTypesInfo = () => (
  <>
    In music industry, there are two primary types of works:{' '}
    <b>Musical Compositions</b> and{' '}
    <b>
      Sound Recordings <s>copyright and</s>
    </b>{' '}
    <b>
      <s>publishing rights.</s>
    </b>{' '}
    These two kinds of works have their own copyright.
    <ol className="list-decimal list-outside ml-6 mb-8">
      <li>
        <b>
          Copyright in Musical Composition (Publishing Rights or Composition
          Rights):
        </b>{' '}
        Relate to the “song” or underlying composition—the lyrics and melody of
        a song, independent of any particular recording. These rights are
        divided between the <b>songwriter</b> (or composer) and the{' '}
        <b>music publisher.</b> The publisher manages the songwriter’s
        composition by licensing it for use, collecting royalties, and ensuring
        it is properly credited. The key components of publishing rights include{' '}
        <b>performance rights, mechanical rights,</b> and synchronization rights
        (for use in films, TV, etc.).
      </li>
      <li>
        <b>Copyright in Sound Recordings (MASTER Rights):</b> Pertains to the
        ownership of a particular recording of a performance of a song. Whoever
        owns the master rights controls the use, distribution, reproduction, and
        performance of that specific recording. These rights typically belong to
        the record label or the artist who financed the production of the
        recording, though they can be sold or licensed.
      </li>
    </ol>
    Both rights are crucial for monetizing and legally protecting music. The
    copyright controls the use of a specific recording, while publishing rights
    control the use of the song&#39;s composition.
  </>
)

export const GovernanceTypesInfo = () => {
  const [isVotingInfoOpen, setIsVotingInfoOpen] = useState(false)
  const [isAdminInfoOpen, setIsAdminInfoOpen] = useState(false)

  return (
    <>
      <p>
        Voting ensures that each business decision is consulted with all of the
        copyright owners. Designating an administrator ensures faster decision
        making, but less consultation with copyright owners. However,
        administrators also have responsibilities and a duty to properly
        represent the interests of the copyright owners.
      </p>
      <ReadHereLink
        label="Still not clear about voting? read here."
        open={() => setIsVotingInfoOpen(true)}
      />
      <ReadHereLink
        label="Still not clear about designating an admin? read here."
        open={() => setIsAdminInfoOpen(true)}
      />
      <InfoDialog
        isOpen={isVotingInfoOpen}
        close={() => setIsVotingInfoOpen(false)}
      >
        When multiple people own a piece of intellectual property (IP), such as
        a song, the governance of that IP—meaning how decisions are made and
        actions are taken—depends on the percentage of ownership that each party
        holds. Here&#39;s a technical breakdown of how this works: 1.
        Percentage-Based Ownership Ownership of IP can be divided among
        different parties based on agreed-upon percentages. These percentages
        represent how much control and financial stake each person or entity has
        in the IP. 2. Governance and Decision-Making When decisions need to be
        made regarding the IP (e.g., licensing the work, distribution deals,
        marketing strategies), the ownership percentages come into play.
        Typically, decisions are made through voting or consensus among the
        owners, and the weight of each vote is determined by ownership
        percentages. a. Simple Majority b. Unanimous Agreement c. Supermajority
        Defined as a specific percentage higher then 50% which might be 66%,
        75%, or another threshold. This rule is often used for high-impact
        decisions. d. Anyone- A low enough percentage threshold is set for
        decision making which enables any one rights owner in the work to make a
        decision legal or business decision on behalf of the group. Financial
        Considerations Financial returns from the IP are tied to ownership
        percentages, governance also affects how revenue is shared: Royalties &
        Profits: Each owner gets paid based on their percentage ownership.
        Expenses: Owners may agree to share costs (e.g., for marketing, legal
        fees, or production). How expenses are divided is usually outlined in a
        governance agreement. 6. Dispute Management In case of conflicts, the
        governance agreement should detail how disagreements will be resolved.
        Common methods include: Majority Rule: If one owner disagrees, but the
        majority agrees, the decision is enacted. Veto Rights: Owners with
        specific percentages might have veto power over certain decisions.
        Third-Party Arbitration: A neutral third party may step in to resolve
        disputes if the owners can&#39;t agree. To avoid disputes, it&#39;s
        essential to establish a governance agreement that clearly defines how
        business and administrative decisions will be handled and how revenue
        will be split.
      </InfoDialog>
      <InfoDialog
        isOpen={isAdminInfoOpen}
        close={() => setIsAdminInfoOpen(false)}
      >
        In the context of music intellectual property (IP), an administrator is
        responsible for managing the rights and revenues associated with a
        songwriter&#39;s or composer&#39;s music. This role typically involves
        overseeing various aspects of licensing, royalty collection, and
        ensuring proper copyright protection. Administrators often work with
        music publishers, but independent songwriters and artists can also hire
        them directly to handle the business side of their music. Here’s a
        breakdown of what a music IP administrator typically does: Copyright
        Registration: They ensure that the song or composition is properly
        registered with the relevant copyright offices and performing rights
        organizations (PROs) to protect the intellectual property. Licensing:
        Administrators negotiate and manage licenses for the use of the music.
        This can include synchronization licenses (for film, TV, and
        commercials), mechanical licenses (for physical or digital
        distribution), and public performance licenses (for radio, live
        performances, etc.). Royalty Collection: They monitor and collect
        royalties from various sources, including streaming services, radio,
        live performances, and sales, both domestically and internationally.
        Distributing Payments: Administrators distribute royalties to the
        songwriters, composers, and any other rights holders, ensuring that all
        parties receive their fair share. Rights Enforcement: They monitor the
        use of the music to make sure it&#39;s not being used without
        permission, and they may take legal action in cases of infringement or
        unauthorized use. Reporting and Auditing: Administrators provide
        detailed reports on royalties and earnings and may also audit music
        users or platforms to ensure accurate payment. Overall, the
        administrator acts as a key business manager for the intellectual
        property of music, ensuring that the creators are compensated and their
        rights are protected.
      </InfoDialog>
    </>
  )
}
