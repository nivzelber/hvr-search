import Home from "@mui/icons-material/Home";
import { useTheme } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

import { HOME } from "../../../common/routes";
import { Link } from "../../link";

import { Search } from "./search";
import { StyledToolbar } from "./topbar.styled";

export const Topbar = () => {
  const theme = useTheme();

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
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
