import { TNavbarList } from '@/libs/types'
import Link from 'next/link'
import React from 'react'

type NavbarProps = {
    lists : TNavbarList
}

const Navbar : React.FC<NavbarProps> = ({lists}) => {
  return (
    <nav className='hidden md:flex md:gap-3'>
        {
            lists.map(({label, href}, index) => (
                <div key={index}>
                    <Link href={href} className='font-medium text-sm'> {label} </Link>
                </div>
            ))
        }
    </nav>
  )
}

export default Navbar