import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../components/NavBar";

import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
