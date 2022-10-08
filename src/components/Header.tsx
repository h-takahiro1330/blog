import Link from 'next/link'
import { FC } from 'react'

export const BLOG_TITLE = "Camper's Blog"

export const Header: FC = () => (
  <header className="flex items-center px-8 border-b bg-white text-2xl font-extrabold shadow-sm h-header">
    <Link href="/">
      <a>{BLOG_TITLE}</a>
    </Link>
  </header>
)
