import { prisma } from "@/server/db";
import { getServerSession } from "next-auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/server/auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const userId = session.user.id;

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (!user.teamId) {
    return res.status(401).json({ message: "User not in a team" });
  }

  const submission = await prisma.submission.findUnique({
    where: {
      teamId: user.teamId,
    },
    include: {
      files: true,
    },
  });

  if (!submission) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  const emptySubmission = submission.empty;

  if (emptySubmission) {
    return res.status(404).json({ message: "No submission found" });
  }

  return res.status(200).json(submission);
};

export default handler;
