import { useRouter } from 'next/navigation'
import Question from './Question'
import { questions } from './questions'
import ReadHereLink from '@/components/ReadHereLink'

const LandingPage = () => {
  const { push } = useRouter()

  return (
    <div className="flex flex-col items-center md:items-start">
      {/* Main Section */}
      <section className="max-w-[776px] w-full flex flex-col gap-5">
        {/* Heading */}
        <p className="md:text-[32px] text-[20px] font-share tracking-[-0.05rem] text-start">
          Welcome to the <span className="font-rubik">MESA</span> music contract builder.
        </p>

        {/* Content for screens smaller than 768px */}
        <p className="md:hidden text-[18px] font-share tracking-[-0.05rem]">
          Here are a series of questions to help you build an agreement for your music release.
        </p>

        {/* Content for larger screens (768px and up) */}
        <div className="hidden md:block">
          <p className="md:text-[24px] text-2xl font-share tracking-[-0.05rem] text-center md:text-start">
          Here are a series of questions to help you build an agreement for your music release. Just click the button to get started. To navigate back and change a previous answer, click on the previous question above (text in gray).
          <br />
          For the time being, this contract template is meant only for artists who:
          </p>

         
        </div>

 {/* "OWN YOUR MUSIC" Banner for large screens */}
    <div className="flex flex-col justify-center items-center font-rubik my-8  md:hidden">
            <div className="flex gap-2">
              <span className="text-[43px] font-rubik font-bold text-red-600 tracking-wide lineHeight-1 OwnMusic">OWN</span>
              <span className="text-[43px] font-bold text-red-600 tracking-wide lineHeight-1 OwnMusic">YOUR</span>
            </div>
            <span className="text-[64px] font-extrabold text-white lineHeight-1">MUSIC</span>
          </div>

        {/* Questions Section */}
        <div className="pl-2 hidden md:block">
          {questions.map((question: string) => (
            <Question key={question} question={question} />
          ))}
        </div>

        {/* Read Here Link (always visible) */}
        <div className="md:flex hidden mt-6">
        <ReadHereLink className="text-[15px] md:text-[24px] text-center" link="/" />
      </div>
      </section>

      {/* Get Started Button */}
      <div className="mt-10 w-full flex md:justify-start justify-center">
        <button
          type="button"
          className="bg-grey-dark border-2 border-danger font-rubik text-lg rounded-lg py-2 px-6 md:w-auto h-24 md:h-14 w-72"
          onClick={() => push('/contract-builder')}
        >
          GET STARTED
        </button>
      </div>

      {/* "Read Here" Link for mobile screens */}
      <div className="md:hidden mt-6">
        <ReadHereLink className="text-[15px] text-center" link="/" />
      </div>
    </div>
  )
}

export default LandingPage
