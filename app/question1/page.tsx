'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const ContractBuilder1 = () => {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState('')

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(date)
  }

  let date = new Date().toLocaleDateString()

  return (
    <div className="text-start py-10 gap-y-16  px-10">
      <main className="grid grid-cols-2 leading-10">
        <div className="w-3/4 py-10">
          <p>What type of splits contract would you like to create?</p>
          <form className="flex flex-col">
            <label>
              <input
                type="radio"
                name="type"
                onChange={handleRadioChange}
                className="radio"
                required
              />
              SONG WRITING
            </label>
            <label>
              <input
                type="radio"
                name="type"
                onChange={handleRadioChange}
                className="radio"
              />
              MASTER RECORDING
            </label>
            <label>
              <input
                type="radio"
                name="type"
                onChange={handleRadioChange}
                className="radio"
              />
              BOTH
            </label>
          </form>
        </div>
        <div className=" p-8">
          <p className="text-xs">
            Your contract has yet to be completed. Continue to fill out the
            decision tree.
          </p>
          <p>
            Copyright ownership agreement for Music Composition, joint work.
          </p>
          <p>
            This agreement is entered into on{' '}
            <span className="text-red-500">
              {selectedOption ? selectedOption : ' '}
            </span>
          </p>
        </div>
      </main>
      <footer className="flex flex-col gap-6 row-start-3">
        <a
          className="items-center gap-2 hover:underline hover:underline-offset-4"
          href="moreInfoQ1"
        >
          If confused, read here
        </a>
        <button onClick={() => router.push('/question2')}>SUBMIT</button>
      </footer>
    </div>
  )
}

export default ContractBuilder1
