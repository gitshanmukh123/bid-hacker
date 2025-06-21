"use server"
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getItem(itemId: number) {
  try {
    const item = await prisma.bbItem.findFirst({
      where: {
        id: itemId, // Ensure the field name matches your schema
      },
    });

    return item;
  } catch (error) {
    console.error('Error fetching bids:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
