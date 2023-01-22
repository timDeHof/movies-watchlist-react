import { Box } from "@mui/material"
import React from "react"
import { MovieCard } from "../components"

export const Movieslist = ({ movies }) => {
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
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            // @ts-ignore
            movie={movie}
          />
        ))}
      </Box>
    </Box>
  )
}
