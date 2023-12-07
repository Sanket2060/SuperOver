import React from 'react'
import { useEffect } from 'react';
import Button from '../components/Button'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { MdOutlineReplay } from "react-icons/md";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../features/userDetailsSlice';
import auth from '../Appwrite/auth';
function Results() {
  const params = useParams();
  const username=useSelector((state=>state.userDetails.userDetails.username))
  const userEmail=useSelector((state=>state.userDetails.userDetails.userEmail))
  
  const currentTotalPoints=useSelector((state=>state.userDetails.userDetails.totalPoints))
  useEffect(()=>{
    console.log("Username and currentTotalPoints",username,currentTotalPoints);
  },[params]);
  const navigate=useNavigate();
  useEffect(()=>{
    auth.updateDocument(username,currentTotalPoints)
    .then(()=>{
      useDispatch(login(auth.getUserDetailsDocument(userEmail)));
    })
    .then((setTimeout(() => {
      
      // console.log("Time to go to home");
     navigate('/home'); 
    }, 10000)))
    
  },[username])
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
        {/* <Link to='/home'><Button text="Back" imgComponent={<IoArrowBackCircleSharp size={25}/>} /></Link> */}
      </div>
    </>
  )
}

export default Results