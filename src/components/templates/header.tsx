
import React from 'react'
import Logo from '../atoms/logo'
import Navbar from '../molecules/navbar'
import { NAVBARLIST } from '@/utils/constant'
import Auth from '../molecules/auth'

const Header = () => {
  return (
    <div className='flex justify-between gap-2 p-4 fixed top-0 left-0 w-full items-center px-4 md:px-[120px] z-[2] bg-white bg-opacity-95 '>
        <Logo src='/logo.png' />
        <Navbar lists={NAVBARLIST} />
        <Auth/>
    </div>
  )
}

export default Header