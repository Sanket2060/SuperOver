import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Game from './pages/Game.jsx'
import Toss from './components/Toss.jsx'
import GameSecondInnings from './pages/GameSecondInnings.jsx'
import Results from './pages/Results.jsx'
import { Provider } from 'react-redux'
import store from './App/store.js'
import Leaderboard from './pages/Leaderboard.jsx'
import { MyProfile } from './pages/index.js'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} >
    <Route path='' element={<Login/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='toss' element={<Toss/>}/>
    <Route path='game/:tossResult' element={<Game/>}/>
    <Route path='gamesecondinnings/:current/:target' element={<GameSecondInnings/>}/>
    <Route path='/results/:result' element={<Results/>}/>
    <Route path='/leaderboard' element={<Leaderboard/>}/>
    <Route path='/myprofile' element={<MyProfile/>}/>




  </Route>
  
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />  
    {/* //kei lai ni wrap garnu pardaina yo method ma */}
    </Provider>
  </React.StrictMode>,
)
