import React from 'react'
import Button from '../components/button'

// import { MdSportsCricket } from "react-icons/md"; //react icons not running
function Home() {
  return (
    <div>
        <div className="selectauthentication py-3">
          <span>Sign-Up</span>
          <span>Login</span>
        </div>
        <form action="" className="authenticate flex flex-col items-center mb-4">
          <input type="text" placeholder='Name(4-6 characters)'  className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2'/>
          <input type="text" placeholder='Password' className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2' />
          <Button text="Submit"/> 
          <br />
           </form>
          
           {/* <div className="play flex">
            <hr  className='h-24 w-14'/>
             <p>Play</p>
             <hr  className='h-24 w-14'/>
           </div> */}








       
       
       
       
       
        </div>
  )
}

export default Home