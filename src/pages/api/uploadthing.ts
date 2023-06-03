import { createNextPageApiHandler } from "uploadthing/next-legacy";

import { fileUploadRouter } from "@/server/uploadthing";

const handler = createNextPageApiHandler({
  router: fileUploadRouter,
});

export default handler;
