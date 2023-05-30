import Image from 'next/image'
import React from 'react'

type LogoProps = {
    src : string
}

const Logo : React.FC<LogoProps> = ({src}) => {
  return (
    <Image src={src} width={150} height={36} alt='logo' />
  )
}

export default Logo