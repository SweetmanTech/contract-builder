'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const MoreInfoQ5 = () => {
  const router = useRouter()
  return (
    <div className="popup flex-col">
      <p>
        Voting ensures that each business decision is consulted with all of the
        copyright owners. Designating an administrator ensures faster decision
        making, but less consultation with copyright owners. However,
        administrators also have responsibilities and a duty to properly
        represent the interests of the copyright owners.
      </p>
      <a
        className="items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={() => router.push('/moreInfoVoting')}
      >
        Still not clear about voting? read here.
      </a>
      <a
        className="items-center gap-2 hover:underline hover:underline-offset-4"
        onClick={() => router.push('/moreInfoAdmin')}
      >
        Still not clear about designating an admin? read here.
      </a>
      <button
        onClick={() => router.push('/question4')}
        className="popup_button"
      >
        x
      </button>
    </div>
  )
}

export default MoreInfoQ5
