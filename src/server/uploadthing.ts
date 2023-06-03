import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";
import { NextApiRequest, NextApiResponse } from "next";

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
      console.log(metadata);
      console.log(file);
    }),
} satisfies FileRouter;

export type FileUploadRouter = typeof fileUploadRouter;
