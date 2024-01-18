import Image from 'next/image'
export default function Logo() {
  return (
    <div className="inline-flex items-center space-x-2">
      <Image
        src="/logo.png"
        width={22}
        height={22}
        alt="logo"
      />
      <p className="font-medium">Algoedge Technologies</p>
    </div>
  )
}
