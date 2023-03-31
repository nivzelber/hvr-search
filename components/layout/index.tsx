import { PropsWithChildren } from "react";

import { Topbar } from "./topbar";

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Topbar />
    {children}
  </>
);
