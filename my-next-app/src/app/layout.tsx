import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";



export const metadata: Metadata = {
  title: "contact manager",
  description: "A simple contact manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-grey-50">
          <Navbar/>
          <main className="container mx-auto px-8 py-8">
          {children}
          </main></div>
       
        
      </body>
    </html>
  );
}
