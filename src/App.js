import { Box } from "@mui/material"
import React, { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { Navbar, Searchbar } from "./components"
import { Movieslist, Watchlist } from "./routes"

function App() {
  const [movies, setMovies] = useState([])
  const { pathname } = useLocation()
  return (
    <Box>
      <Navbar />
      {pathname === "/watchlist" ? null : <Searchbar setMovies={setMovies} />}
      <Routes>
        <Route path='/' element={<Movieslist movies={movies} />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </Box>
  )
}

export default App
