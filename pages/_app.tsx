import "../styles/globals.css";
import * as React from "react";
import Head from "next/head";
import { createTheme } from "@mui/material/styles";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { createEmotionCache } from "../styles/setup/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const theme = createTheme({
    palette: {
      primary: {
        main: green.A700
      },
      secondary: {
        main: "#ff6666"
      }
    }
  });
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
