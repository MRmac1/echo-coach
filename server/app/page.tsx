import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <section className='mx-auto flex'>Home with Tabs</section>
      <footer>
        <Link href='/record'>to Record</Link>
      </footer>
    </div>
  )
}
