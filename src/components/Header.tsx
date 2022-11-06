'use client'

import Link from 'next/link'
import { FC, useState } from 'react'

export const BLOG_TITLE = "Camper's Blog"

export const Header: FC = () => {
  const [isCamping, setIsCamping] = useState(true)

  return (
    <header className="flex items-center px-8 border-b bg-white text-2xl font-extrabold shadow-sm h-header">
      <Link href="/">{BLOG_TITLE}</Link>
      <button className="mx-2" onClick={() => setIsCamping(!isCamping)}>
        {isCamping ? '🏕️' : '🌋'}
      </button>
    </header>
  )
}
