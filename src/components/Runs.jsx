import React from 'react'

function Runs({text,onClick}) {
  return (
    <button className='runs w-9 h-9 rounded-full bg-[#e76f51] flex justify-center items-center' onClick={onClick}>{text}</button>
  )
}

export default Runs