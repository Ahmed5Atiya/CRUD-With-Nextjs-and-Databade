import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navebar from "@/componant/Navebar";
import Footer from "@/componant/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navebar />
        <section className="w-full flex justify-center">{children}</section>
      </body>
    </html>
  );
}
