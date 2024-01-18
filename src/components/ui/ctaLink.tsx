import Link from 'next/link'
export default function CtaLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center font-medium underline underline-offset-2"
    >
      <p>{text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-5 h-5 ml-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
        />
      </svg>
    </Link>
  )
}
