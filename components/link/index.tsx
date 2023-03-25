import NextLink from "next/link";
import { PropsWithChildren } from "react";
import { UrlObject } from "url";

interface LinkProps {
  href: string | UrlObject;
}

export const Link = ({ href, children }: PropsWithChildren<LinkProps>) => (
  <NextLink href={href} passHref>
    <a>{children}</a>
  </NextLink>
);
