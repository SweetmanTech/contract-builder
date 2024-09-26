'use client'

import React from 'react'
import { useRouter, useSearchParams, useParams } from 'next/navigation'
import { useState } from 'react'

const DynamicPage = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const pageNumber = Number(params.page)
  const pageCount = Number(searchParams.get('pageCount'))
  const [legalName, setLegalName] = useState('')
  const [email, setEmail] = useState('')
  const [contributorType, setcontributorType] = useState('')
  const [split, setSplit] = useState('')

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLegalName(event.target.value)
  }
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }
  const handleContributorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setcontributorType(event.target.value)
  }
  const handleSplitChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 101) {
      setSplit(event.target.value)
    } else {
      setSplit('100')
    }
  }

  const handleNextPage = () => {
    // If the current page exceeds pageCount, redirect to the final page (e.g., /thank-you)
    if (pageNumber >= pageCount) {
      router.push(`/question4?pageCount=${pageCount}`)
    } else {
      const nextPage = pageNumber + 1
      router.push(`/${nextPage}?pageCount=${pageCount}`)
    }
  }

  const goToPage = (page: number) => {
    router.push(`/${page}`)
  }

  return (
    <div className="float-root text-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="grid grid-cols-2 p-7">
        <div className="p-10">
          <div>
            <button
              onClick={() => router.push('/question1')}
              className="text-xs text-gray-500 w-full border-0 relative text-start"
            >
              What type of splits contract would you like to create?
            </button>
            <button
              onClick={() => router.push('/question2')}
              className="text-xs text-gray-500 w-full border-0 relative text-start"
            >
              What is the name of the song?
            </button>
            <button
              onClick={() => router.push('/question3')}
              className="text-xs text-gray-500 w-full border-0 relative text-start"
            >
              How many collaborators contributed to writing the song?
            </button>

            {Array.from({ length: pageNumber - 1 }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className="text-xs text-gray-500 w-full border-0 relative text-start"
              >
                Contributor {i + 1}
              </button>
            ))}
          </div>
          <h2>Contributor {pageNumber}</h2>
          <form className="flex flex-col">
            <label className="text-xs pt-2 pb-2">Legal Name (First Last)</label>
            <input
              type="text"
              onChange={handleNameChange}
              className="rounded-lg bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white w-1/2"
            />

            <label className="text-xs pt-2 pb-2">
              Email (example@mesawallet.io)
            </label>
            <input
              type="email"
              onChange={handleEmailChange}
              className="rounded-lg bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white w-1/2"
            />

            <label className="text-xs pt-2 pb-2">Type of contributor</label>
            <select
              name="type"
              id="cont"
              className="bg-black w-1/2"
              onChange={handleContributorChange} //gives error but works?
            >
              <option value="blank"></option>
              <option value="LYRIC">Lyrics</option>
              <option value="MUSIC">Music</option>
            </select>
            <label className="text-xs pt-2 pb-2">Split (%)</label>
            <input
              type="number"
              max="100"
              onChange={handleSplitChange}
              className="rounded-lg bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white w-1/2"
            />
          </form>
        </div>
        <div className=" p-8 py-1">
          <p className="text-xs text-gray-500">
            Your contract has yet to be completed. Continue to fill out the
            decision tree.
          </p>
          <h3>1.0 Music Work Identification</h3>
          <p>
            The parties acknowledge and accept their contribution to the
            authorship or composition of the musical work and agree to the
            distribution of copyright ownership as follows:
          </p>
          <h3 className="pt-10">Collaborator {pageNumber}:</h3>
          <p>
            Legal Name:
            <span className="text-red-500">{legalName}</span>
          </p>
          <p>
            Email Address:
            <span className="text-red-500">{email}</span>
          </p>
          <p>
            Contribution:
            <span className="text-red-500">{contributorType}</span>
          </p>

          {/* Need to  ensure splits add to 100*/}

          <p>
            Split (%):
            <span className="text-red-500">{split}</span>
          </p>
        </div>
      </main>
      <footer className="flex flex-col gap-6 row-start-3">
        <button onClick={handleNextPage} className="border border-red">
          SUBMIT
        </button>
      </footer>
    </div>
  )
}

export default DynamicPage
