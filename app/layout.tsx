import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "../components/Footer";
import SocialSidebar from "../components/SocialSidebar";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SP || Portfolio",
  description: "Portfolio make in next js 13 App router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Header />
          <SocialSidebar />
          <div className="max-w-[1430px] mx-auto  md:px-36">
            <div className="max-w-[1140px] xl:border-light-gray xl:border-r xl:border-l dark:border-gray-800">
              <main className="max-w-[1000px] mx-auto relative z-20">
                {children}
                <Analytics />
                <Footer />
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
