import { PrismaClient } from "@prisma/client";
import { type NextApiRequest, type NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server/auth";

export default async function handler (
    req : NextApiRequest,
    res : NextApiResponse
) {
    const prisma = new PrismaClient();
    const session = await getServerSession(req, res, authOptions);
    
    if(session) {
        const curUrl = req.url;
        let teamCode : string | undefined;
        if (typeof curUrl === 'string') {
            teamCode = curUrl.substring(curUrl.lastIndexOf('/') + 1); // getting teamCode from url
        }
        console.log(teamCode);

        // fetching info of team using teamCode
        const teamInfo = await prisma.team.findFirst({
            // include only name from users column or all details of users?
            include: {
                members: true // {
                //     select: {
                //         name: true,
                //     },
                // },
            }, 
            where : {
                code : teamCode
            }
        })
        return res.send(teamInfo);
    } else {
        res.status(401);
    }
    res.end();
}