import { FC } from 'react'

export const Footer: FC = () => (
  <footer className="flex items-center justify-center text-center bg-gray-100 h-footer">
    © {new Date().getFullYear()} Hioki Takahiro
  </footer>
)
