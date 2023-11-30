import React from 'react'

function ScoreShortcut() {
  return (
    <div className='w-full h-14 rounded-3xl bg-[#1e363f] flex justify-between text-white px-8 pt-2 font-Russo text-sm'>
        <div className="score">Score<div>35/1</div></div>
        <div className="ballsleft">Balls left<div>15 off 18</div></div>
        <div className="target">Target<div>Not set</div></div>
    </div>
  )
}

export default ScoreShortcut