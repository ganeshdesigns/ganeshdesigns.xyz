import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex h-screen w-full bg-[#333] items-center justify-center">
      <Link href="/Home"><button className="py-2 px-4 font-mono duration-300 text-sm text-[#ceed67] border border-[#ceed67] rounded-full hover:text-[#333] hover:bg-[#ceed67] hover:scale-110">start</button></Link>
    </div>
  )
}
