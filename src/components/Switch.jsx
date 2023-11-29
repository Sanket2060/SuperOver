import React from 'react'
import { useState } from 'react'
function Switch() {
     const [soundOn,isSoundOn ] = useState(true)
  return (
    <div className={`w-14 h-7 ${soundOn?'bg-[#1e363f]':'bg-[#94574a]'} rounded-full hover:cursor-pointer`}  onClick={
      ()=>{
        isSoundOn(!soundOn)}

      }>
      {!soundOn?
        <div className='bg-[#f4a361] w-7 h-7  rounded-[50%]  transition-all duration-500 '></div>
        :
        <div className='bg-[#f4a361] w-7 h-7  rounded-[50%] ml-8 transition-all duration-500'></div>
      }
    </div>
  )
}

export default  Switch