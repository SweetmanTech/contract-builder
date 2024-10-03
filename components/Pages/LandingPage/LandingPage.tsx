import { useRouter } from 'next/navigation'
import Question from './Question'
import { questions } from './questions'
import ReadHereLink from '@/components/ReadHereLink'

const LandingPage = () => {
  const { push } = useRouter()

  return (
    <>
      <section className="max-w-[776px] flex flex-col gap-5">
        <p className="text-[32px] font-share tracking-[-0.05rem]">
          Welcome to the <span className="font-rubik">MESA</span> music contract
          builder.
        </p>
        <p className="text-2xl font-share tracking-[-0.05rem]">
          {`Here are a series of questions to help you build an agreement for your music release. 
          Just click the button to get started. To navigate back and change a previous answer, 
          click on the previous question above (text in gray).`}
          <br />
          For the time being, this contract template is meant only for artists
          who:
        </p>
        <div className="pl-2">
          {questions.map((question: string) => (
            <Question key={question} question={question} />
          ))}
        </div>
      </section>
      <ReadHereLink link="/popups/moreInfoLanding" />
      <button
        type="button"
        className="bg-grey-dark border-2 border-danger font-rubik text-lg rounded-lg py-2 px-6 mt-10"
        onClick={() => push('/popups/disclaimer')}
      >
        GET STARTED
      </button>
    </>
  )
}

export default LandingPage
