import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../styles/createEmotionCache";
import { ResponsiveDrawer } from "../components/ResponsiveDrawer";

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="自作のカードで遊べるカードゲームCauldron DCGで利用できるカードのエディターです。" />
        <title>Cauldron DCG Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <ResponsiveDrawer>
          <Component {...pageProps} />
        </ResponsiveDrawer>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
