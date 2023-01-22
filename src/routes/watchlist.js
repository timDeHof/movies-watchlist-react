import { Movie } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

export const Watchlist = () => {
  return (
    <IconButton color='inherit' component={Link} to='/'>
      <Movie />
    </IconButton>
  )
}
