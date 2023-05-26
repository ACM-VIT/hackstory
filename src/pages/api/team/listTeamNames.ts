import { prisma } from "@/server/db";
import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/server/auth";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (session) {
    const teams = await prisma.team.findMany({
      select: {
        name: true,
      },
    });

    if (teams) {
      const teamNames = teams.map((team) => team.name);
      return res.status(200).json({ teamNames: teamNames });
    } else {
      return res.status(404).json({ message: "No teams were found" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
