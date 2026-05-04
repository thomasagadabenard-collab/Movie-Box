import NavBar from './Components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Browse from './Pages/Browse'
import WatchList from './Pages/WatchList'
import Genre from './Pages/Genre'
import Favorites from './Pages/Favorites'
import Footer from './Components/Footer'
import PopularCard from './Components/PopularCard'

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
      <PopularCard  title={"Batman dawn"} date={2024} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5lBaNlFb86fKPxLVMqanBACM6B6j5Eo1Wn96HI29oZt19OJSrHtVO0tzD51ex8I70uuNKmlo3XC4EOuRJeY2s-onErD1eHbR2miBA2w&s=10"}/>
      <Footer />
    </>
  )
}

export default App