import InfoDialog from '@/components/InfoDialog'

type Props = {
  isOpen: boolean
  close: () => void
}

const LandingPageInfo = ({ isOpen, close }: Props) => (
  <InfoDialog isOpen={isOpen} close={close}>
    <div className="font-bold">
      <p>
        Self-publishing and self-distributing your music means that you, as an
        artist or as a part of a group of creatives, take full control over the
        song writing, production, release, and distribution of your work without
        relying on traditional publishers or music labels. Here&#39;s a
        technical breakdown of what that entails:
      </p>
      1. Self-Publishing
      <br />
      What is Publishing?
      <br />
      <p className="mb-4">
        Publishing refers to the rights management of your music. When you write
        or compose a song, you own the copyright to that piece of music.
        Copyright ensures that you are paid when your music is used
        commercially, such as when it is streamed, played on the radio, or used
        in TV or film.
      </p>
      2. Self-Distribution
      <br />
      What is Distribution?
      <br />
      <p className="mb-4">
        Distribution is the process of getting your recorded music onto various
        platforms, both digital (streaming services, downloads) physical (CDs,
        vinyl, etc.), or in NFT format.
      </p>
      3. Legal Responsibilities
      <br />
      <ul className="list-disc ml-8 mb-4">
        <li>
          Contracts & Licensing: As a self-published and self-distributed
          artist, you must be familiar with basic music contracts, licensing
          agreements, and intellectual property laws.
        </li>
        <li>
          Copyright Registration: Although you automatically own the copyright
          to your music upon creation, registering it with the U.S. Copyright
          Office (or the equivalent in your country) provides additional legal
          protection.
        </li>
      </ul>
      Summary
      <br />
      By self-publishing and self-distributing, you keep all the creative and
      financial control over your music but take on the added responsibility of
      managing rights, royalties, promotion, distribution logistics and
      financial distribution. You need to be well-organized and either learn how
      to handle these aspects, hire professionals or use online tools to assist
      you.
    </div>
  </InfoDialog>
)

export default LandingPageInfo
