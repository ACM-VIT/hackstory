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
        <meta name="title" content="CSI - Discover.JS" />
        <meta
          name="description"
          content="CSI-VIT brings to you a series of technical workshops to introduce you to the world of webdev. Come along and let us guide you through your very own portfolio website!"
        />
        <meta property="og:site_name" content="HackStory" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackstory.in" />
        <meta property="og:title" content="Hack your way through the world, where innovation writes the next chapter!" />
        <meta property="og:description" content="Join us at HackStory‘23, where innovation takes center stage. Get ready to apply your talents to solve real-world problems and provide innovative solutions. Computer Society Of India (CSI), Association for Computing Machinery (ACM), Debate Society and Bulls and Bears (BnB) have come together, bringing their own niche to present to you the hackathon of the year. With tracks ranging from FinTech to ML in social causes, open innovation and more, get ready to create and revolutionize the world we live in." />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hackstory.in/" />
        <meta property="twitter:title" content="Hack your way through the world, where innovation writes the next chapter!" />
        <meta property="twitter:description" content="Join us at HackStory‘23, where innovation takes center stage. Get ready to apply your talents to solve real-world problems and provide innovative solutions. Computer Society Of India (CSI), Association for Computing Machinery (ACM), Debate Society and Bulls and Bears (BnB) have come together, bringing their own niche to present to you the hackathon of the year. With tracks ranging from FinTech to ML in social causes, open innovation and more, get ready to create and revolutionize the world we live in." />
        <meta name="keywords" content="csivitu, csi, acm, acmvit, bnb, bnbvit, debsoc, debsoc, computer society of india, association for computing machinery, debate society, bulls and bears, tech, js, ml, ai, hackathon, hack, competition, html, css, next, react, webdev, vit, technology, programming, coding, machine learning, blockchain, health innovation, open innovation, social issues, ml x social issues, game of life, code, vit, vellore" />
      </Head>
      <ToastContainer />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default MyApp;
