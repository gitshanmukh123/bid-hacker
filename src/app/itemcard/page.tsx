import { bbItem } from "@/types/data";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
// import next from "@public/next.svg"
import { isBidOver } from "@/lib/bids";
import { Button } from "../components/ui/button";

export function ItemCard({ item }: { item: bbItem}) {
  return (
    <div key={item.id} className="border p-8 rounded-xl space-y-2">
      <Image
        src="/next.svg"
        alt={item.name}
        width={200}
        height={200}
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-lg">
        starting price: ${item.startingprice}
      </p>

      {isBidOver(item) ? (
        <p className="text-lg">Bidding is Over</p>
      ) : (
        <p className="text-lg">
          Ends On: {format(item.enddate, "eeee M/dd/yy")}
        </p>
      )}

      <Button asChild variant={isBidOver(item) ? "outline" : "default"}>
        <Link href={`/items/${item.id}`}>
          {isBidOver(item) ? "View Bid" : "Place Bid"}
        </Link>
      </Button>
    </div>
  );
}
