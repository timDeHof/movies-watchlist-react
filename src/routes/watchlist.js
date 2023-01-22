import { AddCircle } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import React from "react"
import { MovieCard } from "../components"

export const Watchlist = () => {
  return (
    <Box flex={4} p={2}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto",
          height: "auto",
          width: { xs: "100%", sm: "35%" },
        }}>
        <Typography>Your watchlist is looking a little empty...</Typography>
        <Button variant='text' component={Link} to='/' startIcon={<AddCircle />} size='small'>
          Let’s add some movies!
        </Button>
      </Box>
    </Box>
  )
}
