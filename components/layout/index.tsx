import { PropsWithChildren } from "react";

import { Container } from "./layout.styled";
import { Topbar } from "./topbar";

export const Layout = ({ children }: PropsWithChildren) => (
  <Container>
    <Topbar />
    <main>{children}</main>
  </Container>
);
