"use client";
import React from "react";
import Image from "next/image";
import { Silkscreen } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Background from "../components/ui/bg/bg";
import { motion } from "framer-motion";
import Terms from "./terms";

// Font definitions
const silkScreen = Silkscreen({ weight: "400", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Background />
      <div className="absolute -z-10 w-full"></div>
      <div className="z-10 max-w-4xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto hover:background lg:p-8  hover:drop-shadow-glow"
            href="/"
            rel="noopener noreferrer"
          >
            <Image
              src="/db-logo.png"
              alt="DB Logo"
              className="dark:invert"
              width={120}
              height={1}
              priority
              quality={100}
            />
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
      >
        <Terms />
      </motion.div>
      <div className="mb-24"></div>
    </main>
  );
}
