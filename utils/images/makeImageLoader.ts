import { ImageLoader } from "next/image";

export const makeImageLoader: (baseURL: string) => ImageLoader =
  baseURL =>
  ({ src }) =>
    baseURL + src;
