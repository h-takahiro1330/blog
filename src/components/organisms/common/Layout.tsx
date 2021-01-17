import React, { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main className="bg-gray-100 min-h-layout py-10">{children}</main>
    <Footer />
  </>
)
