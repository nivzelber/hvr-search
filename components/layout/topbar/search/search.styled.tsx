import styled from "@emotion/styled";
import InputBase from "@mui/material/InputBase";

export const Search = styled.div`
  position: relative;
  width: fit-content;

  border-radius: 15px;

  background-color: white;
`;

export const StyledInputBase = styled(InputBase)`
  width: 120px;
  :focus-within {
    width: 200px;
  }

  transition: all 0.5s;
`;
