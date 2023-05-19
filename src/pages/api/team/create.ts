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
  const prisma = new PrismaClient();
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    const { name } = req.body;
    try {
      const team_code = generateCode();
      const newTeam = await prisma.team.create({
        data: {
          name: name,
          code: team_code,
        },
      });
      return res.status(200).json("new team created");
    } catch (error) {
      return res.status(401).json("forbidden");
    }

    console.log("Session", JSON.stringify(session, null, 2));
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};

