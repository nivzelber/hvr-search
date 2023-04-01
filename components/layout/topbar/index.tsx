import Home from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { useSearchStore } from "../../../store/searchStore";

import { Search, SearchIconWrapper, StyledInputBase, StyledToolbar } from "./topbar.styled";

export const Topbar = () => {
  const { search, setSearch } = useSearchStore();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton size="medium" edge="end" color="inherit">
            <Home />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="חפש..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};