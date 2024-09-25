'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PopupProps {
  onClose: () => void
}

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="popup flex-col">
      <p>
        Specifying the name of a song or musical work in contracts, particularly
        when a master recording is also involved, is crucial for ensuring
        clarity and preventing confusion. Multiple versions of a song, such as
        remixes, live performances, or covers, can exist, and without clear
        identification, it may lead to disputes over royalties, rights, and
        ownership. By defining the exact version, the contract ensures proper
        royalty allocation and protects the rights of creators and performers.
      </p>
      <button onClick={onClose} className="popup_button">
        x
      </button>
    </div>
  )
}

const ContractBuilder2 = () => {
  const router = useRouter()
  const [showPopup, setShowPopup] = useState(false)
  const [selectedOptionSong, setSelectedOptionSong] = useState('')
  const [selectedOptionMaster, setSelectedOptionMaster] = useState('')

  const handleSongChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionSong(event.target.value)
  }
  const handleMasterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOptionMaster(event.target.value)
  }

  const togglePopup = () => {
    setShowPopup(!showPopup)
  }

  return (
    <div className="float-root text-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="grid grid-cols-2 p-7">
        <div className="p-10">
          <button
            onClick={() => router.push('/question1')}
            className="text-xs text-gray-500 w-full border-0 relative text-start"
          >
            What type of splits contract would you like to create?
          </button>
          <p>What is the name of your song?</p>
          <form className="flex flex-col">
            {/* <label>Song composition</label> */}
            <input
              type="text"
              name="type"
              onChange={handleSongChange}
              className="rounded-lg bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white w-1/2"
            />

            {/* <label>Recorded version</label>
            <input
              type="text"
              name="type"
              onChange={handleMasterChange}
              className="rounded-lg bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white w-1/2"
            /> */}
          </form>
        </div>
        <div className=" p-8 py-1">
          <p className="text-xs text-gray-500">
            Your contract has yet to be completed. Continue to fill out the
            decision tree.
          </p>
          <h3>1.0 Music Work Identification</h3>
          <p>
            The contracting parties have collaborated in the authorship and
            composition of the musical work titled{' '}
            <span className="text-red-500">
              {selectedOptionSong ? selectedOptionSong : ' '}
            </span>
          </p>
          <br></br>
          {/* <h3>1.0 Master Recording Identification</h3>
          <p>
            The contracting parties have collaborated in the recording and
            production of the sound recording titled{' '}
            <span className="text-red-500">
              {selectedOptionMaster ? selectedOptionMaster : ' '}
            </span>
          </p> */}
        </div>
      </main>
      <footer className="flex flex-col gap-6 row-start-3">
        {/* <a
          className="items-center gap-2 hover:underline hover:underline-offset-4"
          href="#"
          onClick={togglePopup}
        >
          Confused with this bit too? read here.
        </a> */}
        <button
          onClick={() => router.push('/question3')}
          className="border border-red"
        >
          SUBMIT
        </button>
        {showPopup && <Popup onClose={() => setShowPopup(false)} />}
      </footer>
    </div>
  )
}

export default ContractBuilder2
