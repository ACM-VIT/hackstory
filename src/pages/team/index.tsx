import React, { useEffect, useState } from "react";
import Header from "@/components/Common/Header";
import ViewTeam from "@/sections/MyTeam-Sections/ViewTeam";
import getHandler from "@/handlers/getHandler";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";
import Loader from "@/components/Common/loader";
import Toaster from "@/utils/toaster";
import { DEV_BASE_URL } from "@/constants";

const Index = () => {
  const [team, setTeam] = useState({
    name: "",
    members: [],
    code: "",
  });
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const URL = `${DEV_BASE_URL}/api/team/getTeamDetails`;
    getHandler(URL)
      .then((res) => {
        if (res.statusCode == 400) {
          Toaster.error("You haven't joined any team yet.");
          router.push("/team/join");
        } else {
          setTeam(res.data);
          setLoading(false);
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
      {loading ? <Loader /> : <ViewTeam team={team} />}
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

export default Index;
