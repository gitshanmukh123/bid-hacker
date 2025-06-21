"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllBids(itemId: number) {
  try {
    const bids = await prisma.bbBid.findMany({
      where: {
        itemid: itemId, // Ensure the field name matches your schema
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        user: {
          select: {
            image: true,
            name: true,
          },
        },
      },
    });

    return bids;
  } catch (error) {
    console.error('Error fetching bids:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
