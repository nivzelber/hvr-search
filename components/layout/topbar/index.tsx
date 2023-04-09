import { Card, ClickAwayListener, Popper, useTheme, IconButton, Box , AppBar} from "@mui/material";
import { useState, MouseEvent, ReactNode } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Home from "@mui/icons-material/Home";

import { HOME } from "../../../common/routes";
import { Link } from "../../link";

import { Search } from "./search";
import { Space, StyledToolbar } from "./topbar.styled";

export type TopbarProps = {
  FiltersForm?: ReactNode
}

export const Topbar = ({FiltersForm}: TopbarProps) => {
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
              <Home htmlColor={theme.palette.primary.contrastText} />
            </Link>
          </IconButton>

          <Search />

          {FiltersForm && <>
            <Space/>
            
            <IconButton color="inherit" onClick={handleClick}>
             <FilterAltIcon />
            </IconButton>
            
            <Popper open={open} placement="bottom-start" anchorEl={anchorEl}>
              <ClickAwayListener onClickAway={handleClose}>
                <Card>{FiltersForm}</Card>
              </ClickAwayListener>
            </Popper>
          </>}
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
