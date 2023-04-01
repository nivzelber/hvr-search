import styled from "@emotion/styled";

import { FullScreenContainer } from "../../styles/components/layouts";

export const Container = styled(FullScreenContainer)`
  display: flex;
  flex-direction: column;

  main {
    flex-grow: 1;
  }
`;
