'use client'

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import mesaImage from './../public/images/mesa_logo.png';

interface PopupProps {
  onClose: () => void;
}

const Popup = ({ onClose }: PopupProps) => {
  return (
    <div className="popup flex-col">
        <p>In music industry,  there are two primary types of works: Musical Compositions and Sound Recordings  These two kinds of works have their own copyright.</p>
<ol>
<li>1. <b>Copyright in Musical Composition (Publishing Rights or Composition Rights):</b> Relate to the “song” or underlying composition—the lyrics and melody of a song, independent of any particular recording. These rights are divided between the songwriter (or composer) and the music publisher. The publisher manages the songwriter’s composition by licensing it for use, collecting royalties, and ensuring it is properly credited. The key components of publishing rights include performance rights, mechanical rights, and synchronization rights (for use in films, TV, etc.).</li>
<li>2. <b>Copyright in Sound Recordings (MASTER Rights):</b> Pertains to the ownership of a particular recording of a performance of a song. Whoever owns the master rights controls the use, distribution, reproduction, and performance of that specific recording. These rights typically belong to the record label or the artist who financed the production of the recording, though they can be sold or licensed.</li>
</ol>
<p>Both rights are crucial for monetizing and legally protecting music. The copyright controls the use of a specific recording, while publishing rights control the use of the song's composition.</p>
        <button onClick={onClose} className='popup_button'>x</button>
    </div>
  );
};

const ContractBuilder1 = () => {

  const [showPopup, setShowPopup] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(date);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
 let date = new Date().toLocaleDateString()
  return (
    <div className="float-root text-start min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <header>
      <Image className="float-left" src={mesaImage} width={25} height={25} alt="M"></Image>
      <p className="float-left"><b>mesa</b></p>
      <p className="float-right"><b>MUSIC SPLITS</b> <br />Contract Builder</p>
      <hr className='w-screen'/>
    </header>
    <main className="grid grid-cols-2 ">
    <div className="w-3/4 p-8">
      <p >
      What type of splits contract would you like to create?
      </p>
      <form className="flex flex-col">
      <label >
      <input type="radio" name="type" onChange={handleRadioChange}/>
       SONG WRITING
      </label>
      <label >
      <input type="radio" name="type" onChange={handleRadioChange}/>
       MASTER RECORDING
      </label>
      <label >
      <input type="radio" name="type" onChange={handleRadioChange}/>
        BOTH
      </label>
      </form>
      </div>
      <div className=" p-8">
        <p className="text-xs">Your contract has yet to be completed. Continue to fill out the decision tree.</p>
        <p>Copyright ownership agreement for Music Composition,  joint work.</p>
        <p>This agreement is entered into on {" "}
        <span className="text-red-500">{selectedOption ? selectedOption : " "}</span>
        </p>
      
      </div>
    </main>
    <footer className="flex flex-col gap-6 row-start-3">
      <a className="items-center gap-2 hover:underline hover:underline-offset-4" href="#" onClick={togglePopup}>
          If confused, read here
      </a>
      <Link href="/question2" >
      <button>SUBMIT</button>
      </Link>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </footer>
  </div>
  );
};

export default ContractBuilder1;
