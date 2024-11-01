import React from 'react'
import InfoDialog from '../InfoDialog'
import { useModalProvider } from '@/providers/ModalProvider'

const MusicWorkInfo = () => {
  const { musicWorkInfoModalOpen, setMusicWorkInfoModalOpen } =
    useModalProvider()
  return (
    <InfoDialog
      isOpen={musicWorkInfoModalOpen}
      close={() => setMusicWorkInfoModalOpen(false)}
      className="sm:p-12"
    >
      <p>
        Specifying the name of a song or musical work in contracts, particularly
        when a master recording is also involved, is crucial for ensuring
        clarity and preventing confusion. Multiple versions of a song, such as
        remixes, live performances, or covers, can exist, and without clear
        identification, it may lead to disputes over royalties, rights, and
        ownership. By defining the exact version, the contract ensures proper
        royalty allocation and protects the rights of creators and performers.
      </p>
    </InfoDialog>
  )
}

export default MusicWorkInfo
