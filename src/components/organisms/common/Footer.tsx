import { FC } from 'react'

export const Footer: FC = () => (
  <footer className="h-16 flex items-center justify-center text-center bg-gray-100 h-footer">
    © {new Date().getFullYear()} Hioki Takahiro
  </footer>
)
