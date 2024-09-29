const UnsignedVersion = () => {
  return (
    <div
      className="invisible fixed w-screen h-screen left-0 top-0 z-[-1] p-10 text-black text-lg flex flex-col justify-center pointer-events-none"
      id="unsigned-version"
    >
      <p className="font-rubik text-6xl text-center">Unsigned Version</p>
      <p className="font-share pt-6">
        1. What type of splits contract would you like to create?
      </p>
      <p className="font-share pt-2 pl-7">SongWriting</p>
      <p className="font-share pt-2">2. What is the name of the song?</p>
      <p className="font-share pt-2 pl-7">MESA MUSIC</p>
      <p className="font-share pt-2">
        3. How many collaborators contributed to writing the song?
      </p>
      <p className="font-share pt-2 pl-7">
        Collaborator 1: <br />
        Legal Name: Patrick Kielb <br />
        Email address: Management@picerecords.com <br />
        Contribution : LYRIC <br />
        Ownership percentage: 50% <br />
      </p>
      <p className="font-share pt-2">
        4. Would you like to vote when making business decisions or designate an
        administrator?
      </p>
      <p className="font-share pt-2 pl-7">Vote: 30%</p>
    </div>
  )
}

export default UnsignedVersion
