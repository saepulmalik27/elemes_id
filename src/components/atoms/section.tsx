import React from 'react'

type SectionProps = {
    children: React.ReactNode
}

const Section : React.FC<SectionProps> = ({children}) => {
  return (
    <section className='p-4 md:px-[120px]'>{children}</section>
  )
}

export default Section