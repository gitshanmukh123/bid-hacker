// components/ItemDetails.tsx

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { prisma } from "@/utils/prismaDB";
import { formatToDollar } from "@/lib/currency";
import { pageTitleStyles } from "@/styles";
import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";
import { bbBid, bbItem } from "@/types/data";
import { isBidOver } from "@/lib/bids";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { createBidAction } from "./items/[itemId]/actions";


function formatTimestamp(timestamp: Date) {
  return formatDistance(timestamp, new Date(), { addSuffix: true });
}

export async function ItemDetails({ itemId }: { itemId: string }) {

  const item1 = await prisma.bbItem.findUnique({
    where: { id: Number(itemId) },
  });

  const item=item1 as unknown as bbItem;

  


  const session = await getServerSession(authOptions);
  if(!session){
    return null;
  }


  
  
  const allBids1 =  await prisma.bbBid.findMany({
    where: { itemid: Number(itemId) },
    orderBy: { id: 'desc' },
    include: {
      user: {
        select: {
          image: true,
          name: true,
        },
      },
    },
  });
  
  const allbids= allBids1 as bbBid[];
  const hasBids = allbids.length > 0;
  const idd=item.userid;
  const canPlaceBid =
      session && (idd !== session.user?.id) && !isBidOver(item);

  if (!item) {
    return (
      <div className="space-y-8 flex flex-col items-center mt-12">
        <Image src="/next.svg" width="200" height="200" alt="Package" />

        <h1 className={pageTitleStyles}>Item not found</h1>
        <p className="text-center">
          The item you&apos;re trying to view is invalid.
          <br />
          Please go back and search for a different auction item.
        </p>

        <Button asChild>
          <Link href={`/`}>View Auctions</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-8">
        <div className="flex flex-col gap-6">
          <h1 className={pageTitleStyles}>
            <span className="font-normal">Auction for</span> {item.name}
          </h1>
          {isBidOver(item) && (
            <Badge className="w-fit" variant="destructive">
              Bidding Over
            </Badge>
          )}

          <Image
            className="rounded-xl"
            src="/next.svg"
            // Replace `/next.svg` with your item image URL when available
            alt={item.name}
            width={400}
            height={400}
          />
         
        
          <div className="text-xl space-y-4">
            <div>
              Current Bid{" "}
              <span className="font-bold">${formatToDollar(item.currentbid)}</span>
            </div>
            <div>
              Starting Price of{" "}
              <span className="font-bold">${formatToDollar(item.startingprice)}</span>
            </div>
            <div>
              Bid Interval{" "}
              <span className="font-bold">${formatToDollar(item.bidinterval)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 flex-1">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold">Current Bids</h2>
            {canPlaceBid && (
 <form action={createBidAction.bind(null, item.id)}>
 <Button>Place a Bid</Button>
</form>
             
            )}
          </div>

          {hasBids ? (
            <ul className="space-y-4">
              {  allbids.map((bid:bbBid) => (
                <li key={bid.id} className="bg-gray-700 rounded-xl p-8">
                  <div className="flex gap-4">
                    <div>
                      <span className="font-bold">
                        ${formatToDollar(bid.amount)}
                      </span>{" "}
                      by <span className="font-bold">{bid.user.name}</span>
                    </div>
                    <div className="">{formatTimestamp(bid.timestamp)}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col items-center gap-8 bg-gray-700 rounded-xl p-12">
              <Image
                src="/next.svg"
                width="200"
                height="200"
                alt="Package"
              />
              <h2 className="text-2xl font-bold">No bids yet</h2>
              {canPlaceBid && (
                <form action={createBidAction.bind(null, item.id)}>
                  <Button>Place a Bid</Button>
                </form>
                
              )}
            </div>
          )}

        </div>
      </div>
    
  );
}
function generateQrCode(auctionUrl: string) {
  throw new Error("Function not implemented.");
}

