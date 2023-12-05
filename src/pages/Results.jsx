import React from 'react'
import Button from '../components/Button'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdOutlineReplay } from "react-icons/md";
import { Link, useParams } from 'react-router-dom';
function Results() {
  const params = useParams();
  return (
    <>
      {
        params.result=='won' ?
          <div>
            <img className='h-72' src="https://gifdb.com/images/high/happy-win-trophy-with-confetti-tb52kqiyvytfvobs.gif" alt="" />
            <div className='font-Russo my-3 text-center'>Congrats for winning user</div>
          </div>
          : <div>
            <img className='h-72' src="https://cssbud.com/wp-content/uploads/2021/06/nice-try.gif" alt="" />
            <div className='font-Russo my-3 text-center'>Better luck next time user</div>
          </div>
      }
      <div className='buttons flex justify-evenly w-full'>
        <Link to='/toss'><Button text="RePlay" imgComponent={<MdOutlineReplay size={25} />} /></Link>
        <Link to='/home'><Button text="Back" imgComponent={<IoArrowBackCircleSharp size={25}/>} /></Link>
      </div>
    </>
  )
}

export default Results