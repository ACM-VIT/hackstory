import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
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
    const { teamId } = req.body;
    const userId = session.user.id;

    try {
      const team = await prisma.team.findUnique({
        where: { id: teamId },
        include: { members: true },
      });

      if (!team) {
        return res.status(404).json({ message: "Team doesn't exist" });
      }

      // Check if the current user is the team leader
      if (
        team.members.some((member) => member.id === userId && member.leader)
      ) {
        // Delete the team
        await prisma.team.delete({
          where: { id: teamId },
        });

        // Remove the team ID from the members' records
        await prisma.user.updateMany({
          where: { teamId },
          data: { teamId: null },
        });

        // Remove the user's leader status
        await prisma.user.update({
          where: { id: userId },
          data: { leader: false },
        });

        return res.status(200).json("Team deleted successfully");
      }

      return res.status(403).json("Only the team leader can delete the team");
    } catch (error) {
      console.error("Error deleting team:", error);
      return res.status(500).json("Internal server error");
    }
  } else {
    // Not Signed in
    return res.status(401).end();
  }
};

export default handler;
