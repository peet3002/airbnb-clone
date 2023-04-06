'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Logo = () => {
  const router = useRouter()

  return (
    <Image
      alt="Logo"
      className="hidden cursor-pointer md:block"
      height={100}
      width={100}
      style={{ width: 'auto', height: 'auto' }}
      priority
      src="/image/logo.png"
    />
  )
}

export default Logo
