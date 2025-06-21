"use client";

import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";
import ToasterContext from "./api/contex/ToasetContex";
import { useEffect, useState } from "react";
import PreLoader from "./components/Common/PreLoader";
import { AppKnockProviders } from "./knock-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000); // Hide loader after 1 second
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <head />
      <body>
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
          <SessionProvider>
            <AppKnockProviders>
              {loader ? (
                <PreLoader />
              ) : (
                <>
                  <Header />
                  {children}
                  <Footer />
                </>
              )}
            </AppKnockProviders>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
