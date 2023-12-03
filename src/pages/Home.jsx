import React from 'react'
import Button from '../components/Button'
import { GiCardRandom } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { TfiCup } from "react-icons/tfi";
import { Link } from 'react-router-dom';  
import Game from './Game';
function Home() {
  return (
    <>
          <div className="play flex my-6">
            <hr  className='w-14'/>
             <p>Play</p>
             <hr  className='w-14'/>
           </div>
           <div className="playbuttons flex justify-between w-44">
            <Link to='/toss'><Button text="Random" imgComponent={<GiCardRandom />}  /></Link>
           <Button text="Friend" imgComponent={<FaUserFriends/>}/>
            </div>

            <div className="check flex my-6">
            <hr  className='w-14'/>
             <p>Check</p>
             <hr  className='w-14'/>
           </div> 
            <div className="playbuttons flex justify-around w-72">
           <Button text="Leaderboard" imgComponent={<GiPodiumWinner/>} />
           <Button text="My Profile" imgComponent={<CgProfile />}/>
           <Button text="Country Cup" imgComponent={<TfiCup />}/>

            </div>

    </>

    )
}

export default Home