import React from 'react'

type InputProps = {
    placeholder: string
    // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input : React.FC<InputProps> = ({placeholder}) => {
  return (
    <input type="text" className='py-2 px-4 w-fit  placeholder:text-primary placeholder:text-sm outline' placeholder={placeholder}  />
  )
}

export default Input