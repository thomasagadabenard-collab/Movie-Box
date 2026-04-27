import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Browse from './Pages/Browse'
import WatchList from './Pages/WatchList'
import Genre from './Pages/Genre'
import Favorites from './Pages/Favorites'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element = {<Browse />}/>
          <Route path='/watchlist' element = {<WatchList />}/>
          <Route path='/genre' element = {<Genre />}/>
          <Route path='/favorites' element = {<Favorites />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
