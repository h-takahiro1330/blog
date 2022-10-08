import { FC } from 'react'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className="bg-gray-100 min-h-layout py-10">{children}</main>
    <Footer />
  </>
)
