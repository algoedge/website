'use client'

import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <header className="pt-3 pb-1 flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>

      <ol className="inline-flex items-center space-x-16 text-sm">
        <li>
          <Link
            href="mailto:contact@algoedge.co"
            className="font-medium"
          >
            Contact Us
          </Link>
        </li>
      </ol>
    </header>
  )
}
