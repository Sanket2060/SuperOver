import React from 'react'

function ScoreShortcut({ballsCount,score,target,wickets}) {
  return (
    <div className='w-full h-14 rounded-3xl bg-[#1e363f] flex justify-between text-white px-8 pt-2 font-Russo text-sm'>
        <div className="score">Score<div>{score}/{wickets}</div></div>
        <div className="ballsleft">Balls left<div>{6-parseInt(ballsCount)} off 6</div></div>
        <div className="target">Target<div>{target?target:'Not Set'}</div></div>
    </div>
  )
}

export default ScoreShortcut