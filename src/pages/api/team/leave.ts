import type { NextApiRequest, NextApiResponse } from 'next'
import { type Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '~/server/auth';
import { prisma } from '~/server/db';

// GET /api/leaveTeam 
// response: {user: <updatedUser>, team: <updatedTeam>, teamDeleted: <boolean>}
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

  const session: Session | null = await getServerSession(req, res, authOptions);

  if (session) {

    // Fetch team based on id
    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id, 
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

    // Remove member from team
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
      });
    }

    // Return userdata and team data
    res.json({user: user, team: team, teamDeleted: !team.members.length});

  } else {
    // Not Logged in
    res.status(401).send({ message: 'Unauthorized' });
  }
}