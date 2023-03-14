// Styles
import "@/styles/globals.css";

// Types
import type { AppProps } from "next/app";

// Components
import { StaticHead } from "@/components/templates/staticHead";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <StaticHead />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
