"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Space_Grotesk } from "next/font/google";
import Background from "../components/ui/bg/bg";
import { ArrowLeft, Mail } from "lucide-react";
import Contact from "./contact";

// Font definitions
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Page() {
  return (
    <main>
      <Background />
      <motion.h1
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl"
        style={{ userSelect: "none" }}
      >
        <Link
          href="/"
          className="flex items-center mr-4 lg:pointer-events-auto "
        >
          <motion.div
            initial={{ opacity: 0, x: 800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="w-10 h-10 " aria-label="Go back" />
          </motion.div>
        </Link>
        contact
        <motion.div className="flex items-center ml-5 mt-1 lg:pointer-events-auto">
          <Mail className="w-9 h-9 text-white" aria-label="Fast as She Goes" />
        </motion.div>
      </motion.h1>
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
