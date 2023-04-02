import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";

export const Search = styled.div`
  position: relative;
  width: fit-content;

  border-radius: 15px;

  background-color: white;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  height: 100%;
  float: right;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  pointer-events: none;
`;

export const StyledToolbar = styled(Toolbar)`
  background-color: ${({ theme }) => theme.palette.primary};
`;

export const StyledInputBase = styled(InputBase)`
  width: 100px;
  :focus-within {
    width: 200px;
  }

  transition: all 0.5s;

  input {
    padding-right: calc(1em + 10px);
  }
`;
