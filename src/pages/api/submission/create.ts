import { getServerSession } from "next-auth/next";
import { authOptions } from "@/server/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/server/db";

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    projectName: string;
    projectLink: string;
    description: string;
    otherLinks: string;
  };
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const session = await getServerSession(req, res, authOptions);

  const { projectLink, description, projectName, otherLinks } = req.body;

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

  const submission = await prisma.submission.update({
    where: {
      teamId: user.teamId,
    },
    data: {
      projectLink,
      description,
      empty: false,
      projectName,
      otherLinks,
    },
  });

  if (!submission) {
    return res.status(500).json({ message: "Something went wrong" });
  }

  return res.status(200).json(submission);
};

export default handler;
