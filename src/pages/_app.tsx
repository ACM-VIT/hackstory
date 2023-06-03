import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Head from "next/head"; // Import the Head component

import "@/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>HackStory</title> {/* Update the title to "HackStory" */}
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
