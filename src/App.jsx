import React from 'react'
import './App.css'
import { Home } from './pages'
import Button from './components/button'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='homecontainer bg-[#f8d4b9] w-[100vw] h-[100vh] flex justify-center items-center'>
        <div className="contentbox bg-[#e76f51] w-72 h-[500px] border-2 border-black rounded-xl flex flex-col items-center">
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
