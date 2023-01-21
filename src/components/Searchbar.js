import { InputBase, styled } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import React from "react"

const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  width: "60%",
  boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.5)",
  [theme.breakpoints.up("sm")]: {
    width: "30%",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "disabled",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}))
export const Searchbar = () => {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color='disabled' />
      </SearchIconWrapper>
      <StyledInputBase placeholder='Search…' inputProps={{ "aria-label": "search" }} />
    </Search>
  )
}
