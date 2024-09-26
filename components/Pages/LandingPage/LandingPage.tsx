import Question from './Question'
import { questions } from './questions'

const LandingPage = () => {
  return (
    <main className="pt-[110px] px-14 min-h-screen w-screen">
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
        <div>
          {questions.map((question: string) => (
            <Question key={question} question={question} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default LandingPage
