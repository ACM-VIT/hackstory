import type { Team, User } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next'
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { prisma } from '~/server/db';

// POST /api/leaveTeam { email: <emailId>}
// response: {user: <updatedUser>, team: <updatedTeam>}
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const userEmail: string = req.body.email;
  const session: Session | null = await getSession({ req })

  if (!session) {

    const user: User | null = await prisma.user.findUnique({
      where: {
        email: userEmail, 
      },
    });

    if(!user){
      res.status(404).send({ message: "User doesn't exist"})
      return;
    }

    if(!user.teamId){
      res.status(404).send({ message: "User is not in a team"})
      return;
    }

    const team = await prisma.team.update({
      where: {
        id: user.teamId, 
      },
      data: {
        members: {
          disconnect: [{ id: user.id }],
        },
      },
      include: {
        members: true,
      },
    });

    // delete team when last member leaves
    if(team.members.length === 0){
      await prisma.team.delete({
        where: {
          id: team.id,
        }
      })
    }
    

    res.json({user: user, team: team});

  } else {
    res.status(401).send({ message: 'Unauthorized' });
  }
}