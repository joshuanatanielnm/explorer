import { cn } from "@/utils/ui";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/provider/react-query-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Explorer",
  description: "Explorer dashboard for Cosmos-based Blockchains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-50">
        <div className="h-3 w-full bg-gradient-to-b from-orange-500 to-yellow-50" />
        <ReactQueryProvider>
          <div
            className={cn(
              inter.className,
              "max-w-screen-xl mx-auto pt-12 pb-24 text-zinc-600 px-6"
            )}
          >
            {children}
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
