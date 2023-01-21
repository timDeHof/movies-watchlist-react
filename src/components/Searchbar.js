import { Divider, IconButton, InputBase, Paper } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import { fetchMovies } from "../utils/utils"
import React, { useState } from "react"

export const Searchbar = ({ setMovies }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await fetchMovies(searchTerm)
    setMovies(data)
    setSearchTerm("")
  }

  return (
    <Paper
      component='form'
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='Search Movies'
        value={searchTerm}
        inputProps={{ "aria-label": "search Movies" }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <IconButton color='primary' sx={{ p: "10px" }} aria-label='search' onClick={handleSubmit}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
