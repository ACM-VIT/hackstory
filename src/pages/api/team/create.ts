import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import type { NextApiRequest, NextApiResponse } from "next";

export function generateCode(): string {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * 26));
  }
  return result;
}

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
  };
}

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const { name } = req.body;
    const session = await getServerSession(req, res, authOptions);
    if (session) {
      const userId: string = session.user.id;
      // console.log(userId);
      const data = await prisma.user.findUnique({ where: { id: userId } });
      console.log(data);
      if (data) {
        if (data.teamId) {
          return res
            .status(400)
            .json({ message: "User is already part of a team" });
        } else {
          // data.leader = true;
          const teamCode = generateCode();
          const newTeam = await prisma.team.create({
            data: {
              name: name,
              code: teamCode,
            },
          });
          const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { leader: true, teamId: newTeam.id },
          });
          console.log(updatedUser);
          return res.status(200).send(newTeam);
        }
      } else {
        return res.status(404).json({ message: "User does not exist" });
      }
    } else {
      // Not Signed in
      return res.status(401).json({ message: "Unauthorized" });
    }
  } else {
    res.status(405).json({ message: "method not allowed" });
  }
};

export default handler;
