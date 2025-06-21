"use server";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";
// import { getSignedUrlForS3Object } from "@/lib/s3";
import { prisma } from "@/utils/prismaDB";
import { start } from "repl";
import { getSession, useSession } from "next-auth/react";
import { Session } from "@/types/data";

export async function createUploadUrlAction(key: string, type: string) {
  return key+type;
}

export async function createItemAction({
 
  fileName,
  name,
  startingPrice,
  endDate,
  session
}: {
 
  fileName: string;
  name: string;
  startingPrice: number;
  endDate: Date;
  session:Session
}) {
  
  // const { data: session, status } = useSession();

  if (!session) {
    throw new Error("Unauthorized");
  }

  const user = session?.user;

  if (!user ) {
    throw new Error("Unauthorized");
  }

  await prisma.bbItem.create({
    data:{
 name:name,
 startingprice:startingPrice,
 fileKey:"sai_files",
 currentbid:startingPrice,
//  startingprice:startingPrice,
 userid:user.id!,
 enddate:endDate,
    }
  })

  redirect("/");
}
function auth() {
  throw new Error("Function not implemented.");
}

