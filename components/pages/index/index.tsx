import Image from "next/image";

import { BLUE_CARD, YELLOW_CARD } from "../../../common/routes";
import { makeImageLoader } from "../../../utils/images/makeImageLoader";
import { Link } from "../../link";

import { HVR_HOME_PICS_URL } from "./consts";
import { Container, StyledInfoIcon } from "./index.styled";

const imageLoader = makeImageLoader(HVR_HOME_PICS_URL);

export const Index = () => (
  <Container>
    <StyledInfoIcon />
    <Link href={BLUE_CARD}>
      <Image
        loader={imageLoader}
        src="teamim_card_bnr_041121.jpg"
        alt="חבר טעמים"
        width={337}
        height={215}
      />
    </Link>
    <Link href={YELLOW_CARD}>
      <Image
        loader={imageLoader}
        src="keva_card_bnr_041121.jpg"
        alt="חבר של קבע"
        width={337}
        height={215}
      />
    </Link>
  </Container>
);
