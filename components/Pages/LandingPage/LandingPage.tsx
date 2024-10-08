import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Question from './Question'
import { questions } from './questions'
import ReadHereLink from '@/components/ReadHereLink'
import InfoDialog from '@/components/InfoDialog'
import { ArrowRightIcon } from '@heroicons/react/16/solid'

const LandingPage = () => {
  const { push } = useRouter()
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false)

  return (
    <div className="flex flex-col items-center md:items-start">
      <section className="max-w-[776px] w-full flex flex-col gap-5">
        <p className="md:text-[32px] text-[20px] font-share tracking-[-0.05rem] text-start">
          Welcome to the <span className="font-rubik">MESA</span> music contract
          builder.
        </p>

        <p className="md:hidden text-[18px] font-share tracking-[-0.05rem]">
          Here are a series of questions to help you build an agreement for your
          music release.
        </p>

        <div className="hidden md:block">
          <p className="md:text-[24px] text-2xl font-share tracking-[-0.05rem] text-center md:text-start">
            Here are a series of questions to help you build an agreement for
            your music release. Just click the button to get started. To
            navigate back and change a previous answer, click on the previous
            question above (text in gray).
            <br />
            For the time being, this contract template is meant only for artists
            who:
          </p>
        </div>

        <div className="flex flex-col justify-center items-center font-rubik my-8  md:hidden">
          <div className="flex gap-2">
            <span className="text-[43px] font-rubik font-bold text-red-600 tracking-wide leading-none OwnMusic">
              OWN
            </span>
            <span className="text-[43px] font-bold text-red-600 tracking-wide leading-none OwnMusic">
              YOUR
            </span>
          </div>
          <span className="text-[64px] font-extrabold text-white leading-none">
            MUSIC
          </span>
        </div>

        <div className="pl-2 hidden md:block">
          {questions.map((question: string) => (
            <Question key={question} question={question} />
          ))}
        </div>

        <div className="md:flex hidden mt-6">
          <ReadHereLink
            className="text-[15px] md:text-[24px] text-center"
            link="/"
          />
        </div>
      </section>
      <ReadHereLink open={() => setIsInfoOpen(true)} />
      <button
        type="button"
        className="block bg-grey-dark border-2 border-danger font-rubik text-lg rounded-lg py-2 px-6 mt-10"
        onClick={() => setIsDisclaimerOpen(true)}
      >
        GET STARTED
      </button>
      <InfoDialog isOpen={isInfoOpen} close={() => setIsInfoOpen(false)}>
        <div className="font-bold">
          <p>
            Self-publishing and self-distributing your music means that you, as
            an artist or as a part of a group of creatives, take full control
            over the song writing, production, release, and distribution of your
            work without relying on traditional publishers or music labels.
            Here&#39;s a technical breakdown of what that entails:
          </p>
          1. Self-Publishing
          <br />
          What is Publishing?
          <br />
          <p className="mb-4">
            Publishing refers to the rights management of your music. When you
            write or compose a song, you own the copyright to that piece of
            music. Copyright ensures that you are paid when your music is used
            commercially, such as when it is streamed, played on the radio, or
            used in TV or film.
          </p>
          2. Self-Distribution
          <br />
          What is Distribution?
          <br />
          <p className="mb-4">
            Distribution is the process of getting your recorded music onto
            various platforms, both digital (streaming services, downloads)
            physical (CDs, vinyl, etc.), or in NFT format.
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
              Copyright Registration: Although you automatically own the
              copyright to your music upon creation, registering it with the
              U.S. Copyright Office (or the equivalent in your country) provides
              additional legal protection.
            </li>
          </ul>
          Summary
          <br />
          By self-publishing and self-distributing, you keep all the creative
          and financial control over your music but take on the added
          responsibility of managing rights, royalties, promotion, distribution
          logistics and financial distribution. You need to be well-organized
          and either learn how to handle these aspects, hire professionals or
          use online tools to assist you.
        </div>
      </InfoDialog>

      <InfoDialog
        isOpen={isDisclaimerOpen}
        close={() => setIsDisclaimerOpen(false)}
      >
        <p className="mb-4">
          <b>DISCLAIMER:</b> Our intention is to provide a platform for
          self-help. We provide a draft of a contract that should be
          meticulously reviewed by each of the parties willing to make an
          agreement. The information given in this service is provided for your
          private use and does not constitute legal advice. We do not review any
          information you provide us for legal accuracy or sufficiency, draw
          legal conclusions, provide opinions about your usage, or apply the law
          to the facts of your situation.
        </p>
        <p className="mb-4">
          If you don’t understand the terms or consequences of the draft we
          provide, or need legal advice for a specific problem, we encourage you
          to consult with a licensed attorney. The draft provided by this
          service is not a substitute for legal advice from a qualified attorney
          licensed to practice in an appropriate jurisdiction.
        </p>
        <p>
          This draft is limited to the general principles of copyright law. If
          you are interested in learning more about how the MESA system can help
          you, please get in touch at <b>contact@mesawallet.io</b>.
        </p>
        <button
          type="button"
          className="flex ml-auto items-center bg-grey-dark border-2 border-white rounded-lg py-2 px-6 mt-10"
          onClick={() => push('/contract-builder')}
        >
          <span>Proceed</span> <ArrowRightIcon className="size-4 ml-2" />
        </button>
      </InfoDialog>
    </div>
  )
}

export default LandingPage
