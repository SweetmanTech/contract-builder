import { CONTRACT_BUILDER_STEP } from '@/hooks/useContractBuilder'
import { useContractBuilderProvider } from '@/providers/ContractBuilderProvider'
import Image from 'next/image'
import { useEffect } from 'react';
import {GOVERNANCE_TYPE} from '@/hooks/useContractBuilder';

const BuilderMarks = () => {

  const { tab, governanceType } = useContractBuilderProvider()
  const { setTab, songName, setSongName } = useContractBuilderProvider()


  return (
    <>
      {tab === CONTRACT_BUILDER_STEP.SPLITS_TYPE && (
        <Image src="/images/splits-type.svg" alt="" width={117} height={106} />
      )}
      {tab === CONTRACT_BUILDER_STEP.SONG_NAME && (


   <>
    <div className="relative">
      <Image src="/images/song-name.svg" alt="" width={310} height={77} />

      <div
        className="absolute top-1/2 left-0 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SPLITS_TYPE)}
      />
    </div>
   </>


      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT && (
      
   <>
    <div className="relative">
    <Image
          src="/images/collaborators-amount.svg"
          alt=""
          width={310}
          height={77}
        />

      <div
        className="absolute top-1/2 left-12 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
        onClick={() => setTab(CONTRACT_BUILDER_STEP.SONG_NAME)}
      />
    </div>
   </>

      )}
      {tab === CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT && (
       
        <>
        <div className="relative">
        <Image
          src="/images/collaborator-input.svg"
          alt=""
          width={310}
          height={77}
        />
    
          <div
            className="absolute top-1/2 left-24 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
            onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATORS_AMOUNT)}
          />
        </div>
       </>
      )}
      {tab === CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE && (
      
        <>
        <div className="relative">
        <Image
          src="/images/governance-type.svg"
          alt=""
          width={310}
          height={77}
        />
    
          <div
            className="absolute top-1/2 left-34 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
            onClick={() => setTab(CONTRACT_BUILDER_STEP.COLLABORATOR_INPUT)}
            style={{left: '144px'}}
          />
        </div>
       </>


      )}
      {tab === CONTRACT_BUILDER_STEP.VOTE && (

        <>
        <div className="relative">
        <Image src="/images/vote.svg" alt="" width={310} height={77} />

    
          <div
            className="absolute top-1/2 left-48 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
            onClick={() => setTab(CONTRACT_BUILDER_STEP.GOVERNANCE_TYPE)}
          />
        </div>
       </>
      )}
      {tab === CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN && (

<>
<div className="relative">
<Image
          src="/images/designate-admin.svg"
          alt=""
          width={310}
          height={77}
        />
  <div
    className="absolute top-1/2 left-60 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
    onClick={() => setTab(CONTRACT_BUILDER_STEP.VOTE)}
    style={{left: '190px'}}
  />
</div>
</>
        
      )}
      {tab === CONTRACT_BUILDER_STEP.SUCCESS && (
        <>
<div className="relative">
<Image src="/images/success.svg" alt="" width={310} height={77} />

  <div
    className="absolute top-1/2 transform -translate-y-1/2 w-6 h-6 bg-transparent cursor-pointer"
    onClick={() => setTab(CONTRACT_BUILDER_STEP.DESIGNATE_ADMIN)}
    style={{    left: '240px', top: '10px'}}
  />
</div>
</>
      )}
    </>
  )
}

export default BuilderMarks
