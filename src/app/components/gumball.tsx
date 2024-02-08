"use client";
import React from "react";
import Image from "next/image";
import DbInflated from "../../../public/db-inflated.png";

export default function Gumball() {
  return (
    <main>
      <div>
        <Image
          src={DbInflated}
          width={244}
          height={555}
          quality={100}
          alt="Fake it til you matrix"
        />
      </div>
    </main>
  );
}
