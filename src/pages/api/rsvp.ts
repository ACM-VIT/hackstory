import { authOptions } from "@/server/auth";
import { prisma } from "@/server/db";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).send("Unauthorized");
  }

  const userId = session.user.id;

  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      pullingUp: true,
    },
  });

  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }

  return res.status(200).json(user);
};

export default handler;
