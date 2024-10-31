'use client'
import { useEffect, useState } from 'react'

const useBaseUrl = () => {
  const [baseUrl, setBaseUrl] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      setBaseUrl(`${url.origin}`)
    }
  }, [])
  return { baseUrl }
}

export default useBaseUrl
