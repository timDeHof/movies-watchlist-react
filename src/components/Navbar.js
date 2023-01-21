import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  styled,
  Badge,
  Tooltip,
  Stack,
} from "@mui/material"
import { Theaters, Movie } from "@mui/icons-material"
import React from "react"
import { Searchbar } from "./Searchbar"
const StyledNavBar = styled(AppBar)({
  backgroundImage:
    "url(https://images.unsplash.com/photo-1628432136678-43ff9be34064?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80)",
  backgroundBlendMode: "multiply",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundSize: "cover",
  backgroundPosition: "center 25%",
})
export const Navbar = ({ setMovies }) => {
  return (
    <StyledNavBar position='sticky'>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Stack flexDirection='row' alignItems='center'>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ display: { xs: "block", sm: "none" } }}>
            <Theaters />
          </IconButton>
          <Typography variant='h5' component='div' sx={{ display: { xs: "none", sm: "block" } }}>
            Find Your Films
          </Typography>
        </Stack>
        <Searchbar setMovies={setMovies} />
        <Tooltip title='Watchlist'>
          <IconButton color='inherit'>
            <Badge badgeContent={4} color='primary'>
              <Movie />
            </Badge>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </StyledNavBar>
  )
}
