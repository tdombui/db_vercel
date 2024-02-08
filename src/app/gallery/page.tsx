"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Moon } from "lucide-react";
import Background from "../components/ui/bg/bg";
import BackgroundDark from "../components/ui/bg/bg-dark";
import ImageGallery from "./gallery";

export default function Page() {
  const folderPrefix = "bg";
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <h1
        className="flex items-center justify-center mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl "
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
        gallery
        <button
          onClick={toggleDarkMode}
          className="flex items-center ml-4 lg:pointer-events-auto w-10 h-10"
        >
          {isDarkMode ? (
            <Lightbulb className="w-10 h-10" />
          ) : (
            <Moon className="w-10 h-10" />
          )}
        </button>
        {isDarkMode ? <BackgroundDark /> : <Background />}
      </h1>
      {/* <div className="flex items-center justify-center -mt-4">
        <Link
          href="/curated"
          className="ml-8 text-xl"
          aria-label="Curated Gallery"
        >
          /curated
        </Link>
        <Link
          href="/b-side"
          className="ml-8 text-xl"
          aria-label="B-Side Gallery"
        >
          /b-side
        </Link>
      </div> */}
      <ImageGallery folderPrefix={folderPrefix} />
    </div>
  );
}
