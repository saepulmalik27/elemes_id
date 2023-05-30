import React from 'react'
import Carousel from '../molecules/carousel'
import copytext from "@/copytext/home.copy.json"
const Category = () => {
  return (
    <div className='md:pl-[120px] flex flex-col gap-10' >
      <h3 className="text-title-xl md:text-title-2xl">{
        copytext.category.title
      }  <br/>
      <span className='text-olivegreen'  >Receipt</span></h3>
      <Carousel>
        {Array(10).fill(0).map((_, i) => (
          <div key={i} className='w-[230px] h-[173px] transition-all hover:h-[230px]  bg-olivegreen' >{i}</div>
        ))}
      </Carousel>
    </div>
  )
}

export default Category