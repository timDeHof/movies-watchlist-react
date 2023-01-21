import { Star, AddCircle } from "@mui/icons-material"
import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import React from "react"

export const MovieCard = ({ movie }) => {
  const { Title, Runtime, Genre, Plot, Poster, imdbRating } = movie
  return (
    <Card sx={{ display: "flex", mb: 4 }}>
      <CardMedia component='img' sx={{ width: 200 }} image={Poster} alt={Title} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Stack direction='column' spacing={2}>
            <Stack direction='row' spacing={1}>
              <Typography component='div' variant='h5'>
                {Title}
              </Typography>
              <Stack direction='row' alignItems='center'>
                <Star fontSize='small' sx={{ color: "gold" }} />
                <Typography component='div' variant='subtitle2'>
                  {imdbRating}
                </Typography>
              </Stack>
            </Stack>
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Typography component='div' variant='subtitle2'>
                {Runtime}
              </Typography>
              <Typography component='div' variant='subtitle2'>
                {Genre}
              </Typography>
              <Button variant='text' startIcon={<AddCircle />} size='small'>
                Watchlist
              </Button>
            </Stack>
          </Stack>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            {Plot}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}
