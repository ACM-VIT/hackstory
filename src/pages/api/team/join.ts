import { PrismaClient } from "@prisma/client";
import { type Session } from "next-auth";
import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";

const prisma = new PrismaClient();

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    teamCode: string;
  };
}

export default async function joinhandler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse
) {
  const session: Session | null = await getServerSession(req, res, authOptions);
  const { teamCode } = req.body;
  try {
    if (session) {
      const user = await prisma.user.findUnique({
        where: {
          id: session.user.id,
        },
      });

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      if (user.teamId) {
        return res.status(400).json({
          message: "You are already in a team",
        });
      }

      const team = await prisma.team.findUnique({
        where: {
          code: teamCode,
        },
        include: {
          members: true,
        },
      });

      console.log(team);

      if (!team) {
        return res.status(404).json({
          message: "Team not found",
        });
      }

      if (team.members.length >= 3) {
        return res.status(400).json({
          message: "Team is full",
        });
      }

      const updatedTeam = await prisma.team.update({
        where: {
          id: team.id,
        },
        data: {
          members: {
            connect: {
              id: user.id,
            },
          },
        },
        include: {
          members: true,
        },
      });

      return res.status(200).json({
        message: "Successfully joined team",
        team: updatedTeam,
      });
    } else {
      // Not Logged in
      res.status(401).send({ message: "You are not authenticated" });
    }
  } catch (err) {
    res.status(500).send({ err: err, message: "Something went wrong" });
  }
}
