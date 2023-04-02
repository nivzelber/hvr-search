import Home from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { HOME } from "../../../common/routes";
import { useSearchStore } from "../../../store/searchStore";
import { Link } from "../../link";

import { Search, SearchIconWrapper, StyledInputBase, StyledToolbar } from "./topbar.styled";

export const Topbar = () => {
  const { search, setSearch } = useSearchStore();
  const theme = useTheme();

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton size="medium" edge="end" color="inherit">
            <Link href={HOME}>
              <Home
                htmlColor={theme.palette.primary.contrastText}
                onClick={_event => setSearch("")}
              />
            </Link>
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
