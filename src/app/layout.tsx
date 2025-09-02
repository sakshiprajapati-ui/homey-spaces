import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/header/header";
import Footer from "@/components/custom/footer/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Housey-Spaces",
  description: "get rental houses",
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-r from-[#4e54c8] to-[#8f94fb] text-white">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
