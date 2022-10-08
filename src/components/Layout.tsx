import { FC } from 'react'
import { Header } from 'src/components/Header'
import { Footer } from 'src/components/Footer'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className="bg-gray-100 min-h-layout py-10">{children}</main>
    <Footer />
  </>
)
