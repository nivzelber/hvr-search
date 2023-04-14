import { PropsWithChildren } from "react";

import { Container } from "./layout.styled";
import { Topbar, TopbarProps } from "./topbar";

export type LayoutProps = PropsWithChildren<{
  topbarProps?: TopbarProps;
}>;

export const Layout = ({ children, topbarProps }: LayoutProps) => (
  <Container>
    <Topbar {...topbarProps} />
    <main>{children}</main>
  </Container>
);
