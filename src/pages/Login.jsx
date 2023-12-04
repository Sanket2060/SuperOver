import React, { useState, } from 'react'
import Button from '../components/Button'
import { BiSolidCricketBall } from "react-icons/bi";
import { useForm } from "react-hook-form";
import auth from '../Appwrite/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux'; 
import { login } from '../features/userDetailsSlice';   //useSelector,useDispatch ko lagi k k import garnu parxa??
// import { store } from '../App/store';
function Login() {
  const navigate=useNavigate();
  const {register,handleSubmit}=useForm();
  const [signUp,isSignUp]=useState(true);
  const dispatch=useDispatch();
  const [error,setError]=useState('');

  const authenticate=async ({username,email,password})=>{
    console.log(email,password);
    try {
        if (signUp){
        const response=await auth.signUp(email, password);    
        if (response){
          console.log("response:",response);
          dispatch(login({...response,username}));
          navigate('/home');
         }
        }
       else {
         const response=await auth.login(email, password);    
         if (response){
          console.log("response:",response);
          dispatch(login(response,username));
          navigate('/home');
         }
         }       
      } catch (error) {
        console.log("Error",error.message);
        setError(error.message);
      }
     
    
  }
  return (
    <div>
        <div className="selectauthentication py-3 text-center">
          <span className={`mr-5 font-Russo hover:cursor-pointer ${signUp?'underline decoration-4 underline-offset-4':''}`} onClick={()=>{isSignUp(!signUp)}}>Sign-Up</span>
          <span className={`mr-5 font-Russo hover:cursor-pointer ${!signUp?'underline decoration-4 underline-offset-4':''}`} onClick={()=>{isSignUp(!signUp)}}>Login</span>
        </div>
        <form action="" className="authenticate flex flex-col items-center my-4" onSubmit={handleSubmit(authenticate)}>
        {signUp?<input type="text" placeholder='Name(4-6 characters)'  className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2' {...register('username',{
          required:true,
          validate:{
            matchPattern:(value)=>
            /^[a-zA-Z0-9]{1,8}$/.test(value) || setError("Username should be shorter")           
          }
          })}/>:''}
          <input type="text" placeholder='email' className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2' {...register('email',{required:true,})} />
          <input type="text" placeholder='Password' className='text-lg placeholder:font-Russo focus:outline-none mb-4 p-2' {...register('password',{required:true,})} />

          {/* Avatar:<input type="file" name="" id="" className='mb-8' /> */}
          <Button text="Submit" type="submit" /> 
          <br />
         {error?<div>{error}</div>  :<BiSolidCricketBall className='w-14 h-14 mt-5 animate-spin '/>}
           </form>
  
       
       
        </div>
  )
}
          

export default Login