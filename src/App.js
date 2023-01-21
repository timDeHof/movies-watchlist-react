import React from "react"
import { Navbar } from "./components"
import { Movieslist } from "./routes"

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Movieslist />
    </div>
  )
}

export default App
