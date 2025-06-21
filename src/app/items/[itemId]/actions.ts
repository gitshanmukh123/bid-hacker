"use server";

import { isBidOver } from "@/lib/bids";
import { bbItem } from "@/types/data";
import { authOptions } from "@/utils/auth";
import { prisma } from "@/utils/prismaDB";
import { getServerSession } from "next-auth";
import { Knock } from "@knocklabs/node";
import { revalidatePath } from "next/cache";

type Recipient = {
  id: string;
  name: string;
  email?: string;
};

export async function createBidAction(itemId: number) {
  // Get session and validate user
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    throw new Error("You must be logged in to place a bid");
  }

  const knock = new Knock("sk_test_uumwHaB1mvtowkPKhHe3jhqyZkYaZiN2QfQYYbDoHSg");
  const userId = session.user.id;

  // Fetch the item being bid on
  const item = await prisma.bbItem.findUnique({
    where: { id: itemId },
  });



  if (!item) {
    throw new Error("Item not found");
  }

 

  if (isBidOver(item as unknown as bbItem)) {
    throw new Error("This auction is already over");
  }

  const latestBidValue = item.currentbid + item.bidinterval;

  // Create the bid and update the item's current bid
  await prisma.bbBid.create({
    data: {
      amount: latestBidValue,
      itemid: itemId,
      userid: userId,
      timestamp: new Date(),
    },
  });

  await prisma.bbItem.update({
    where: { id: itemId },
    data: { currentbid: latestBidValue },
  });

  // Fetch current bids with user details
  const currentBids = await prisma.bbBid.findMany({
    where: { itemid: itemId },
    include: {
      user: true,
    },
  });

  // Collect unique recipients for notifications
  const recipients: Recipient[] = currentBids
    .filter((bid) => bid.userid !== userId)
    .map((bid) => ({
      id: bid.userid,
      name: bid.user?.name || "Anonymous",
      email: bid.user?.email || undefined, // Normalize email to match Recipient type
    }))
    .reduce<Recipient[]>((unique, recipient) => {
      if (!unique.some((u) => u.id === recipient.id)) {
        unique.push(recipient);
      }
      return unique;
    }, []);

  // Trigger a notification workflow if there are recipients
  console.log("users");
console.log(recipients)

  if (recipients.length > 0) {
    console.log("yes" +"working")
    await knock.workflows.trigger("send-msg-bidders", {
      actor: {
        id: userId,
        name: session.user.name || "Anonymous",
        email: session.user.email,
        collection: "users",
      },
      recipients,
      data: {
        itemId,
        bidAmount: latestBidValue,
        itemName: item.name,
      },
    });
  }

  // Revalidate the item page
  revalidatePath(`/items/${itemId}`);
}
function generateQrCode(auctionUrl: string) {
  throw new Error("Function not implemented.");
}

