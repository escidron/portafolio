import React from 'react'
import { useRouter } from 'next/router'

export default function FirstId() {
    const router = useRouter()
    const firstId = router.query.firstId
  return (
    <div>
      asd
    </div>
  )
}
