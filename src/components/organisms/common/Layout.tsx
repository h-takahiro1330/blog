import { FC } from 'react'
import { Footer } from '~/components/organisms/common/Footer'
import { Header } from '~/components/organisms/common/Header'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className="bg-gray-100 min-h-layout py-10">{children}</main>
    <Footer />
  </>
)
