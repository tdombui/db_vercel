// "use client";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Silkscreen } from "next/font/google";
import Image from "next/image";
import { siteConfig } from "../../config/site";
import { Providers } from "../app/components/providers";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const notoSans = Noto_Sans({ subsets: ["latin"] });
const silkScreen = Silkscreen({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-blend-multiply bg-emerald-950 text-emerald-50`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// --
{
  /* Animated blobs */
}
{
  // <div className="absolute min-h-screen flex-col items-center justify-between p-16">
  //   <div className="absolute w-full max-w-lg">
  //     <div className="absolute -top-5 -left-12 w-max h-max bg-orange-300 rounded-full mix-blend-multiply filter  opacity-100 blur-1xl animate-blob animation-delay-2000"></div>
  //     <div className="absolute -top-19 left-30 w-max h-max bg-pink-300 blur-1xl rounded-full mix-blend-multiply filter opacity-100 animate-blob animation-delay-1000"></div>
  //     <div className="absolute top-10 left-8 w-96 h-96 bg-red-800 rounded-full mix-blend-multiply filter opacity-100 blur-3xl animate-blob animation-delay-4000"></div>
  //   </div>
  // </div>;
}
