import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => (
  <header className="flex items-center px-8 border-b bg-white text-2xl font-extrabold shadow-sm h-header">
    <Link href="/">
      <a>Camper's Blog</a>
    </Link>
  </header>
)
