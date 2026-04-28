import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Browse from './Pages/Browse'
import WatchList from './Pages/WatchList'
import Genre from './Pages/Genre'
import Favorites from './Pages/Favorites'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App