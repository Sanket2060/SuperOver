import React, { useState } from 'react'
import Button from '../components/button'
import { BiSolidCricketBall } from "react-icons/bi";

function Login() {
  const [signUp,isSignUp]=useState(true);
  return (
    <div>
        <div className="selectauthentication py-3 text-center">
          <span className={`mr-5 font-Russo hover:cursor-pointer ${signUp?'underline decoration-4 underline-offset-4':''}`} onClick={()=>{isSignUp(!signUp)}}>Sign-Up</span>
          <span className={`mr-5 font-Russo hover:cursor-pointer ${!signUp?'underline decoration-4 underline-offset-4':''}`} onClick={()=>{isSignUp(!signUp)}}>Login</span>
        </div>
        <form action="" className="authenticate flex flex-col items-center mb-4">
          <input type="text" placeholder='Name(4-6 characters)'  className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2'/>
          <input type="text" placeholder='Password' className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2' />
          <Button text="Submit" /> 
          <br />
           <BiSolidCricketBall className='w-14 h-14 mt-3 animate-spin '/>
           </form>
  
       
       
        </div>
  )
}

export default Login