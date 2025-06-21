// app/items/[itemId]/page.tsx

import { ItemDetails } from "@/app/ItemDetails";
import { useSession } from "next-auth/react";
import { useEffect } from "react";



export default async function ItemPage({ params }: { params: { itemId: string } }) {
  const { itemId } = params;
const session =await useSession;



  return (
    <main className="container mx-auto py-32">
      <ItemDetails itemId={itemId} />
    </main>
  );
}
