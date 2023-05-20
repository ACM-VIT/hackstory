import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import { NextApiRequest, NextApiResponse } from "next";

export function generateCode(): string {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * 26));
  }
  return result;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
    const prisma = new PrismaClient();
    const {name} = req.body;
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      const userId: string = session.user.id;
      const data = await prisma.user.findUnique({ where: { id: userId } });
  
      if (data) {
        if (!data.teamId) {
          data.leader = true;
      
          const teamCode = generateCode();
          const newTeam = await prisma.team.create({
            data: {
              name: name,
              code: teamCode,
            },
          });
          return res.status(200).json("New team created");
        } 
        else {
          return res.status(400).json("User already has a team");
        }
      }
      else{
        return res.status(400).json("user does not exist")
      }
      console.log("Session", JSON.stringify(session, null, 2));
    }
    else {
      // Not Signed in
      return res.status(401).end();
    }
  }
  else{
    res.status(500).json("send a different request")
  }
}