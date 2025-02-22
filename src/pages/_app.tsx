import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextAppProvider } from "@toolpad/core/nextjs";
import { createTheme } from "@mui/material";
import Head from "next/head";

const MetaData = () => {
  return (
    <Head>
      <title>Firebase Auth Example</title>
      <meta name="description" content="Firebase Authentication with Next.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

const Theme = createTheme({
  palette: {
    mode: "dark", // Enables dark mode
    primary: {
      main: "#90caf9", // Light blue
    },
    secondary: {
      main: "#f48fb1", // Pink accent
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Slightly lighter for cards and components
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 600 },
    h2: { fontSize: "1.75rem", fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e", // Dark paper color
          color: "#ffffff",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MetaData />
      <NextAppProvider theme={Theme}>
        <Component {...pageProps} />
      </NextAppProvider>
    </>
  );
}
