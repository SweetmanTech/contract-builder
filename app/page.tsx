'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="float-root text-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start w-3/5 ">
        <h3>
          Welcome to the <b>MESA</b> music contract builder.
        </h3>
        <p>
          Here are a series of questions to help you build an agreement for your
          music release. Just click the button to get started. To navigate back
          and change a previous answer, click on the previous question above
          (text in gray).
        </p>
        <p>
          For the time being, this contract template is meant only for artists
          who:
        </p>
        <ul>
          <li>&bull; Are releasing a song digitally via DSPs</li>
          <li>&bull; Are publishing their song independently</li>
          <li>&bull; Are distributing thejr master recording independently</li>
        </ul>
      </main>
      <footer className="flex flex-col gap-6 row-start-3">
        <a
          className="items-center gap-2 hover:underline hover:underline-offset-4"
          href="/help/moreInfoLanding"
        >
          If confused, read here
        </a>
        <button onClick={() => router.push('/help/disclaimer')}>
          GET STARTED
        </button>
      </footer>
    </div>
  )
}
