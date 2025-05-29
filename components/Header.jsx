import React from 'react'
import Link from 'next/link'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Image from 'next/image'

function Header() {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className='container mx-auto flex justify-between items-center'>
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Portfolio
                <span className='text-emerald-500'>.</span>
            </h1>
            {/* <Image src="/logo.png" width={200} height={80} alt="logo" /> */}
            </Link>
            
            <div className='hidden xl:flex'>
            <Nav />
            </div>

            <div className='xl:hidden'>
              <MobileNav />
            </div>
        </div>
    </header>
  )
}

export default Header