"use client";

import "@knocklabs/react/dist/index.css";
import { KnockProvider, KnockFeedProvider } from "@knocklabs/react";
import { useSession } from "next-auth/react";

import { ReactNode } from "react";

export function AppKnockProviders({ children }: { children: ReactNode }) {
  const {data:session} = useSession();
if(!session){
  return <>
  {children}
  </>
}
else{
  return (
    <KnockProvider
      apiKey={"pk_test_yrUTfuhZUp9ZS4GzbYCDYONCf7pH7L_WYd1Grx5p3ow"}
      userId={session.user?.id ?? ""}
    >
      <KnockFeedProvider feedId={"6e02f7d8-ae1e-44a0-ab4e-4fb3232141e7"}>
        {children}
      </KnockFeedProvider>
    </KnockProvider>
  );
}

}