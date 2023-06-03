import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./db";

const f = createUploadthing();

export const fileUploadRouter = {
  fileUploader: f(["image", "blob"])
    .middleware(async (req: NextApiRequest, res: NextApiResponse) => {
      const session = await getServerSession(req, res, authOptions);

      if (!session) {
        throw new Error("Unauthorized");
      }

      return {
        userId: session.user.id,
      };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const { userId } = metadata;

      const user = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });

      if (!user?.teamId) return;

      await prisma.submission.update({
        where: {
          teamId: user.teamId,
        },
        data: {
          files: {
            create: {
              fileUrl: file.url,
              fileName: file.name,
            },
          },
        },
      });
    }),
} satisfies FileRouter;

export type FileUploadRouter = typeof fileUploadRouter;
