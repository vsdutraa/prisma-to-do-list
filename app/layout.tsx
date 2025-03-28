// import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/header/header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
      <body className={`${inter.className} antialiased`}>
        <div className="h-screen">
          <Header />
          <main className="container m-auto h-[calc(100vh-3.6rem)] border-x p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
