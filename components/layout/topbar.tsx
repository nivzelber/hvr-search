import styled from "@emotion/styled";
import Home from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";

const Search = styled.div`
  position: relative;
  width: fit-content;

  border-radius: 15px;

  background-color: white;
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  float: right;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;

const StyledToolbar = styled(Toolbar)`
  background-color: #003a68;
`;
const StyledInputBase = styled(InputBase)`
  width: 100px;
  :focus-within {
    width: 200px;
  }

  transition: all 0.5s;

  input {
    padding-right: calc(1em + 10px);
  }
`;

export default function SearchAppBar() {
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
            <StyledInputBase placeholder="חפש..." inputProps={{ "aria-label": "search" }} />
          </Search>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
