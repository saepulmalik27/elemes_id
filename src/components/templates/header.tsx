
import React from 'react'
import Logo from '../atoms/logo'
import Navbar from '../molecules/navbar'
import { NAVBARLIST } from '@/utils/constant'

const Header = () => {
  return (
    <div>
        <Logo src='/logo.png' />
        <Navbar lists={NAVBARLIST} />
        
    </div>
  )
}

export default Header