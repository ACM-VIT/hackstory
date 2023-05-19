import {PrismaClient} from "@prisma/client"
import express from "express"
import { NextApiRequest,NextApiResponse } from "next"


const prisma = new PrismaClient()

export default async function joinhandler(req: NextApiRequest, res: NextApiResponse) {
    const {team_code,userId} = req.body;
    try{
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        const team = await prisma.team.findUnique({
            where:{
                code:team_code
            }
        })

        if(!user || !team){
            return res.status(404).json({
                message:"User or Team not found"
            })
        }

        

        // if(team.members.length>=3){
        //     return res.status(400).json({
        //         message:"Team is full"
        //     })
        // }

        await prisma.team.update({
            where:{
                code:team_code
            },
            data:{
                members:{
                    connect:{
                        id:userId
                    }
                }
            },
            include:{
                members:true
            }

        })
        
        return res.status(200).json({
            message:"Successfully joined team",
            team
        })

    }catch(err)
    {
        console.error(err)
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
}






