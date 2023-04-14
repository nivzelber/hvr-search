import styled from "@emotion/styled";
import InfoIcon from "@mui/icons-material/InfoOutlined";

import { FullScreenContainer } from "../../../styles/components/layouts";

export const Container = styled(FullScreenContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
`;

export const StyledInfoIcon = styled(InfoIcon)`
  position: fixed;
  top: 10px;
  left: 10px;

  cursor: pointer;
`;
