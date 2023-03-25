import { PropsWithChildren } from "react";

interface BranchLinkProps {
  href: string;
}

export const BranchLink = ({ href, children }: PropsWithChildren<BranchLinkProps>) => (
  // '//' is needed since most URL's come without the http(s) prefix
  <a href={"//" + href} target="_blank" rel="noreferrer">
    {children}
  </a>
);
