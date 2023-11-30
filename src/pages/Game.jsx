import React, { useState } from 'react'
import Runs from '../components/Runs'
import ScoreShortcut from '../components/ScoreShortcut'
import Toss from '../components/Toss';
function Game() {
  const [start,isStart]=useState(false);
  const [score,setScore]=useState([0,0]);
  const [ballsLeft,setBallsLeft]=useState(18);
  const [target,setTarget]=useState(undefined);
  const [tossTime,setTossTime]=useState(false)
  const startGame=()=>{
    isStart(false);
    toss();
 }
 


 const toss=()=>{
    setTossTime(true);


 }





  return (
    <>
    {
      tossTime?
      <div className="scorecard w-full h-80 bg-[#1e363f] mb-10 rounded-xl flex flex-col items-center ">
       {start?<div className="commentary font-Russo text-white my-3">
          Commentary:It's OUT
        </div>:<button className='font-Russo text-white my-3' onClick={startGame}>Start</button>} 
        <div className="scores bg-white w-80 h-40 rounded-2xl  my-3 font-Russo flex justify-between px-3">
          <div className="player1">
            <div className="score text-center text-9xl">4</div>
            <div className="playername text-lg">Sanket</div>
          </div>
          <div className="player2  ">

            <div className="score text-center text-9xl">4</div>
            <div className="playername text-lg">Computer</div>

          </div>
        </div>
        <div className="nexthit font-Russo text-white w-80">
          <div className="nexthittext text-center my-2"> Choose your Next Hit</div>
          <div className="runs flex justify-between">
            <Runs text="1" />
            <Runs text="2" />
            <Runs text="3" />
            <Runs text="4" />
            <Runs text="5" />
            <Runs text="6" />

          </div>
        </div>
      </div>
      :<Toss/>}
      <ScoreShortcut />
    </>
  )

}

export default Game