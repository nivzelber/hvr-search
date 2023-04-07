import Home from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Card, ClickAwayListener, Popper, useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {useState, MouseEvent, ReactNode} from "react";

import { HOME } from "../../../common/routes";
import { useSearchStore } from "../../../store/searchStore";
import { Link } from "../../link";
import { Search, SearchIconWrapper, Space, StyledInputBase, StyledToolbar } from "./topbar.styled";

export type TopbarProps = {
  FiltersForm?: ReactNode
}

export const Topbar = ({FiltersForm}: TopbarProps) => {
  const { search, setSearch } = useSearchStore();
  const theme = useTheme();


  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton size="medium" edge="end" color="inherit">
            <Link href={HOME}>
              <Home
                htmlColor={theme.palette.primary.contrastText}
                onClick={() => setSearch("")}
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

          {FiltersForm && <>
            <Space/>
            
            <IconButton color="inherit" onClick={handleClick}>
             <FilterAltIcon />
            </IconButton>
            
            <Popper open={open} placement="bottom-start" anchorEl={anchorEl}>
              <ClickAwayListener  onClickAway={handleClose}>
                <Card>{FiltersForm}</Card>
              </ClickAwayListener>
            </Popper>
          </>}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
