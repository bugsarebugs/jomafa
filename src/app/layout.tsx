import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";


export const metadata: Metadata = {
  title: "JOMAFA Company Limited",
  description: "House of More than Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`flex flex-col overflow-scroll bg-gray-950 antialiased `}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
