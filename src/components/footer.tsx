import Link from 'next/link'
import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] ">
      <div className="p-5 pt-10 pb-7 space-y-8 container mx-auto px-4">
        <div>
          <Logo />
        </div>
        <div>
          <div className="flex flex-col justify-between text-xs md:flex-row ">
            <div>
              <p>&copy; {new Date().getFullYear()} Algoedge Technologies. All Rights Reserved. </p>
              <p className="mt-2">D-35, Chikhli Road, Tulsi Park Society, Vyara, Gujarat, India - 394650</p>
            </div>

            <ul className="inline-flex space-x-4 mt-5 md:mt-0">
              <li>
                <Link href="/support">Support</Link>
              </li>
              <li>
                <Link href="/terms">Terms and conditions</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
              <li>
                <Link href="/cancellation">Cancellation and refunds</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
