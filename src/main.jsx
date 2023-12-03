import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'
import Toss from './components/Toss.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Login/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='toss' element={<Toss/>}/>
    <Route path='game/:tossResult' element={<Game/>}/>

  </Route>
  
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    </RouterProvider>
  </React.StrictMode>,
)
