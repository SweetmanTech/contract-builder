import { useRouter } from 'next/navigation'
import Question from './Question'
import { questions } from './questions'
import ReadHereLink from '@/components/ReadHereLink'
import { checkWidth } from '@/components/WindowWidthComponent'

const LandingPage = () => {
  const { push } = useRouter()

  const windowWidth = checkWidth()
  return (
    <div className='flex flex-col'>
      <section className="max-w-[776px] flex flex-col gap-5">
        <p className="md:text-[32px] text-[20px] font-share tracking-[-0.05rem]">
          Welcome to the <span className="font-rubik">MESA</span> music contract
          builder.
        </p>
        {windowWidth !== null && windowWidth < 402 ? (
          <>
          <p className=" md:text-[24px] text-[18px] text-2xl font-share tracking-[-0.05rem]">
            {`Here are a series of questions to help you build an agreement for your music release. `}
            
          </p>

          <div className="flex justify-center items-center font-rubik ">
  <h1 className=" text-center leading-none mt-8 mb-8">
   <div className='flex gap-2 '>
   <span className="text-[43px] font-bold text-red-600 text-transparent OwnMusic tracking-wide leading-none">OWN</span> 
   <span className="text-[43px] font-bold text-red-600 text-transparent OwnMusic tracking-wide leading-none">YOUR</span>
   </div>
    <span className="text-[64px] font-extrabold text-white leading-none">MUSIC</span>
  </h1>
</div>


          </>
        ) : (
          <>
            <p className=" md:text-[24px] text-[18px] text-2xl font-share tracking-[-0.05rem]">
              {`Here are a series of questions to help you build an agreement for your music release. 
          Just click the button to get started. To navigate back and change a previous answer, 
          click on the previous question above (text in gray).`}
              <br />
              For the time being, this contract template is meant only for
              artists who:
            </p>
            <div className="pl-2">
              {questions.map((question: string) => (
                <Question key={question} question={question} />
              ))}
            </div>

      <ReadHereLink link="/" />

          </>
        )}
      </section>

      
  <div>
  <button
        type="button"
        className={`bg-grey-dark border-2 border-danger font-rubik text-lg rounded-lg py-2 px-6 mt-10 ${windowWidth !== null && windowWidth < 402 ? "m-auto block h-24" :""} `}
        onClick={() => push('/contract-builder')}
      >
        GET STARTED
      </button>
  </div>


  {windowWidth !== null && windowWidth < 402 &&<ReadHereLink className='md:text-[24px] text-[15px] text-center' link="/" />}
    </div>
  )
}

export default LandingPage
