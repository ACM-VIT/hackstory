import { prisma } from "~/server/db";
import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    const userId: string = session.user.id;

    // getting teamId using the current user session
    const teamIdObj = await prisma.user.findUnique({
      select: {
        teamId: true,
      },
      where: {
        id: userId,
      },
    });
    const teamId = teamIdObj?.teamId;

    // getting teamInfo using teamId
    if (typeof teamId === "string") {
      const teamInfo = await prisma.team.findFirst({
        include: {
          members: {
            select: {
              name: true,
            },
          },
        },
        where: {
          id: teamId,
        },
      });

      if (teamInfo) {
        return res.status(200).send(teamInfo);
      } else {
        return res.status(400).json({ message: "Team id is not valid" });
      }
    } else {
      return res.status(400).json({ message: "User not in a team" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
