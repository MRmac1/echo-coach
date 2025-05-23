import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <section className='mx-auto flex'>Home with Tabs</section>
      <section className='mx-auto flex'>
        <section>hhahah</section>
      </section>
      <button className='bg-sky-500 hover:bg-sky-100'>...Save changes</button>
      <footer>
        <Link href='/record'>to Record</Link>
      </footer>
    </div>
  )
}
