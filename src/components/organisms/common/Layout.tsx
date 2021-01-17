import React, { FC } from 'react'
import { Footer } from './Footer'
import { Header } from './Header'

export const Layout: FC = ({ children }) => (
  <main className="bg-gray-100 min-h-screen grid grid-rows-layout">
    <Header />
    {children}
    <Footer />
  </main>
)
