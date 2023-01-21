import React, { useState } from "react"
import { Navbar } from "./components"
import { Movieslist } from "./routes"

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className='App'>
      <Navbar setMovies={setMovies} />
      <Movieslist movies={movies} />
    </div>
  )
}

export default App
