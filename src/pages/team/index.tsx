import React, { useEffect, useState } from "react";
import Header from "@/components/Common/Header";
import ViewTeam from "@/sections/MyTeam-Sections/ViewTeam";
import getHandler from "@/handlers/getHandler";
import { useRouter } from "next/router";

const Index = () => {
  const [team, setTeam] = useState({});
  const router = useRouter()

  useEffect(() => {
    getHandler("http://localhost:3000/api/team/getTeamDetails")
      .then((res) => {
        if(res.statusCode==400) router.push('/team/join')
        setTeam(res.data)
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <ViewTeam team={team}/>
    </>
  );
};

export default Index;
