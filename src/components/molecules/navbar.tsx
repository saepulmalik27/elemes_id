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
            lists.map(({label, href, isNew}, index) => (
                <div key={index} className='relative hover:bg-olivegreen text-secondary hover:text-white p-2 rounded-lg' >
                    {
                        isNew && <div className='rounded-full bg-sizzlingred text-white text-[8px] font-bold w-fit absolute -top-2 -right-2 py-1 px-2 uppercase' >Hot</div>
                    }
                    <Link href={href} className='font-medium text-sm text-current '> {label} </Link>
                </div>
            ))
        }
    </nav>
  )
}

export default Navbar