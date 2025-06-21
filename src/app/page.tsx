import { prisma } from "@/utils/prismaDB";
import Discover from "./components/discover";
import Encourage from "./components/encourage";
import { Goal } from "./components/goal";
import { Heade } from "./components/heade";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import Navbar from "./components/navbar";
import Newsteller from "./components/newsteller";
import Ratings from "./components/ratings";
import Roadmap from "./components/roadmap";
import { Services } from "./components/services";
import Team from "./components/Team";

import { bbItem } from "@/types/data";
import { ItemCard } from "./itemcard/page";
export default async function frontPage() {
  const allItems = await prisma.bbItem.findMany({
    include: {
      user: true, // Include the related User object
      bb_bids: true, // Include the related bb_bids array
    },
});
  return (
    <>
      <Heade />
      {/* <Hero /> */}
      {/* <Intro /> */}
      {/* <Goal /> */}
      {/* <Services />
      <Encourage />
      <Discover />
      <Ratings />
      <Newsteller />
      <Team /> */}
  <h1 className="text-4xl font-bold">Items For Sale</h1>
     
     <div className="grid grid-cols-4 gap-8">
      { (allItems  as bbItem[]).map((item:bbItem) => (
  <ItemCard key={item.id} item={item} />
))
}
     </div>
      <Roadmap />
    </>
  );
}
