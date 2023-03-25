import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import { makeImageLoader } from "../../utils/images/makeImageLoader";

import { HVR_HOME_PICS_URL } from "./consts";
import { Container } from "./index.styled";

const imageLoader = makeImageLoader(HVR_HOME_PICS_URL);

export const CardsRouter = () => (
  <Container>
    <Link href="/cards/blue">
      <Image loader={imageLoader} src="teamim_card_bnr_041121.jpg" width={337} height={215} />
    </Link>
    <Link href="/cards/yellow">
      <Image loader={imageLoader} src="keva_card_bnr_041121.jpg" width={337} height={215} />
    </Link>
  </Container>
);
