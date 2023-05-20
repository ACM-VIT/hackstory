import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();



const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const teamId = req.body.teamId;
    try {
      const team = await prisma.team.findUnique({
        where: { id:  teamId },
        include: { members: true },
      });

      if (!team) {
        return res.status(404).json("Team doesn't exist");
      }

      return res.status(200).json({message:team.name});
    }
    

     catch (error) {
      console.error("Error finding team:", error);
      return res.status(500).json("Internal server error");
    }
  } else {
    // Not Signed in
    return res.status(401).send("Unauthorized");
  }
};

export default handler;
