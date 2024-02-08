"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Background from "../components/ui/bg/bg";
import { ArrowLeft } from "lucide-react";
import Contact from "./contact";

// Font definitions
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Page() {
  return (
    <main>
      <Background />
      <h1
        className="flex items-center justify-center mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl"
        style={{ userSelect: "none" }}
      >
        <Link
          href="/"
          className="flex items-center mr-4 lg:pointer-events-auto "
        >
          <div>
            <ArrowLeft className="w-10 h-10 " aria-label="Go back" />
          </div>
        </Link>
        CONTACT
      </h1>
      <motion.div
        className="flex min-h-screen flex-col items-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
      >
        <Contact />
      </motion.div>
    </main>
  );
}
