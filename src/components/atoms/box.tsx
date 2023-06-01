import React from 'react'

type BoxProps = {
    children: React.ReactNode
}

const Box : React.FC<BoxProps> = ({children}) => {
  return (
      <div className="px-5 md:px-10 lg:px-[120px]">
        {children}
      </div>
  )
}

export default Box