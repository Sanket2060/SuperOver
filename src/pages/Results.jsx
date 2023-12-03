import React from 'react'
import Button from '../components/Button'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdOutlineReplay } from "react-icons/md";
import { Link } from 'react-router-dom';
function Results() {
  return (
    <>
    <img className='h-72' src="https://gifdb.com/images/high/happy-win-trophy-with-confetti-tb52kqiyvytfvobs.gif" alt="" />
    <div className='font-Russo my-3'>Congrats for winning user</div>
    <div className='buttons flex justify-evenly w-full'>
    <Link to='/toss'><Button text="Re-Play"  imgComponent={<MdOutlineReplay />}/></Link>
    <Link to='/home'><Button text="Back" imgComponent={<IoArrowBackCircleSharp />}/></Link>
    </div>
    </>
  )
}

export default Results