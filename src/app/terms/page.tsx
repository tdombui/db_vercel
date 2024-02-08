"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Silkscreen } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import Background from "../components/ui/bg/bg";
import { motion } from "framer-motion";
import Terms from "./terms";
import BackgroundDark from "../components/ui/bg/bg-dark";
import { ArrowLeft, Lightbulb, Moon } from "lucide-react";

// Font definitions
const silkScreen = Silkscreen({ weight: "400", subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Page() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Background />
      <div className="fixed top-0 left-0 right-0 z-50">
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl flex items-center justify-center"
          style={{ userSelect: "none" }}
        >
          <Link
            href="/"
            className="mr-4 flex items-center lg:pointer-events-auto"
          >
            <motion.div
              initial={{ opacity: 0, x: 800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeft className="w-10 h-10" aria-label="Go back" />
            </motion.div>
          </Link>
          info/terms
          <button
            onClick={toggleDarkMode}
            className="ml-4 flex items-center lg:pointer-events-auto w-10 h-10"
          >
            {isDarkMode ? (
              <Lightbulb className="w-10 h-10" />
            ) : (
              <Moon className="w-10 h-10" />
            )}
          </button>
        </motion.h1>
      </div>
      {/* Ensure Terms is not directly after a fixed or absolute positioned element without spacing */}
      <div className="pt-32 w-full">
        {" "}
        {/* Adjust padding-top based on your header's actual height */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.25,
          }}
          className="w-full"
        >
          <Terms />
        </motion.div>
        {isDarkMode ? <BackgroundDark /> : null}
      </div>
    </main>
  );
}
