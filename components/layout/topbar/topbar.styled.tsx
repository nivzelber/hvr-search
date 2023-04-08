import styled from "@emotion/styled";
import Toolbar from "@mui/material/Toolbar";

export const StyledToolbar = styled(Toolbar)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Space = styled.div`
  flex-grow: 1;
`;