import React from 'react'
import copytext from "@/copytext/home.copy.json";

const SectionTrending = () => {
  return (
    <div className="md:pl-[120px] flex flex-col gap-5 md:gap-10 py-5">
        <h3 className="text-title-xl md:text-title-2xl">
        {copytext.trending.title} <br />
        <span className="text-olivegreen">Receipt</span>
      </h3>
        <div className='grid grid-flow-col' >
            
        </div>
    </div>
  )
}

export default SectionTrending