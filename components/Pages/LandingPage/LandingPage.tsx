import Link from 'next/link'
import Question from './Question'
import { questions } from './questions'
import ReadHereLink from '@/components/ReadHereLink'

const LandingPage = () => {

  return (
    <>
      <section className="max-w-[776px] flex flex-col gap-5">
        <p className="text-lg font-share sm:text-[32px] sm:tracking-[-0.05rem] sm:leading-normal">
          Welcome to the <span className="font-rubik">MESA</span> music contract
          builder.
        </p>
        <p className="text-lg font-share sm:text-2xl sm:tracking-[-0.05rem]">
          Here are a series of questions to help you build an agreement for your music release.
          {" "}
          <span className='hidden sm:inline'>
            Just click the button to get started. To navigate back and change a previous answer,
            click on the previous question above (text in gray).
            <br />
            For the time being, this contract template is meant only for artists
            who:
          </span>
        </p>
        <div className="hidden pl-2 sm:block">
          {questions.map((question: string) => (
            <Question key={question} question={question} />
          ))}
        </div>
      </section>

      <ReadHereLink link="/" className='hidden sm:block' />

      <div className='mt-10 text-center sm:hidden'>
        <h1 className='text-outline leading-none font-rubik'>own your</h1>
        <h1 className='text-[4rem] leading-[3rem] font-rubik'>music</h1>
      </div>

      <Link
        className="block w-fit mt-10 mx-auto px-7 py-6 bg-grey-dark border-2 border-danger font-rubik rounded-lg sm:py-2 sm:px-6 sm:mx-0"
        href='/contract-builder'>
        GET STARTED
      </Link>

      <div className='mt-14 space-y-4 text-center sm:hidden'>
        <ReadHereLink link="#" label='whose this made for?' className='pt-0' />
        <h1 className='text-sm font-rubik'>or</h1>
        <ReadHereLink link="#" label='need more info?' className='pt-0' />
      </div>
    </>
  )
}

export default LandingPage
