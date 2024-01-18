import Logo from './logo'

export default function Footer() {
  return (
    <footer className="bg-[#e6e6e6] ">
      <div className="p-5 pt-10 pb-7 space-y-8 container mx-auto px-4">
        <div>
          <Logo />
        </div>
        <div>
          <div className="flex justify-between text-xs">
            <p>&copy; {new Date().getFullYear()} Algoedge Technologies. All Rights Reserved. </p>

            <ul className="inline-flex space-x-4">
              <li>Support</li>
              <li>Terms and conditions</li>
              <li>Privacy</li>
              <li>Cancellation and refunds</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
