export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex justify-center">
      <article className="min-w-[20vw] prose my-16 ">{children}</article>
    </section>
  )
}
