import Header from "@/components/Common/Header";
import Team from "@/sections/Register-Sections/Team";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import React, { useEffect } from "react";
import getHandler from "@/handlers/getHandler";
import { useRouter } from "next/router";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const Join = () => {
  const router = useRouter();

  useEffect(() => {
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/api/team/getTeamDetails`
    getHandler(URL)
      .then((res) => {
        if (res.statusCode == 200) {
          Toaster.error("You already are a part of a team.");
          router.push("/team");
        }
      })
      .catch((err) => {
        Toaster.error("Internal Server Error");
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Team />
    </>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {},
  };
};

export default Join;
