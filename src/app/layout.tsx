import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

const monsterrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ride Ease - Your Ride, Your Way",
  description:
    "Ride Ease is a ride-sharing platform that connects drivers and riders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={monsterrat.className}>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
