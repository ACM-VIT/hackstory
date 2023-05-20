import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "~/server/auth";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    teamId: string;
  };
}

const handler = async (req: ExtendedNextApiRequest, res: NextApiResponse) => {
  
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    const teamId = req.body.teamId;
    try {
      const team = await prisma.team.findUnique({
        where: { id:  teamId },
        include: { members: true },
      });

      if (!team) {
        return res.status(404).json({ message: "Team doesn't exist" });
      }

      return res.status(200).json({ name: team.name });
    }
    

     catch (error) {
      console.error("Error finding team:", error);
      return res.status(500).json({ message: "Internal Server error" });
    }
  } else {
    // Not Signed in
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default handler;
