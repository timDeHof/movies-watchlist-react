import { Box } from "@mui/material"
import React, { useState } from "react"
import { Navbar, Searchbar } from "./components"
import { Movieslist } from "./routes"

function App() {
  const [movies, setMovies] = useState([])

  return (
    <Box>
      <Navbar />
      <Searchbar setMovies={setMovies} />
      <Movieslist movies={movies} />
    </Box>
  )
}

export default App
