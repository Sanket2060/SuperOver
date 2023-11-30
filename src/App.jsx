import React from 'react'
import './App.css'
import {Game, Login } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
// import Home from './pages/Home'

function App() {
  return (
    <>
      <div className='homecontainer bg-[#f8d4b9] w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className="contentbox bg-[#e76f51] w-96 h-[600px] border-2 border-black rounded-xl flex flex-col items-center relative p-3">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
