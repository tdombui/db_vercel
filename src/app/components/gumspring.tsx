"use client";
import React from "react";
import Image from "next/image";
import DbInflated from "../../../public/spring.png";

export default function Gumball2() {
  return (
    <main>
      <div>
        <Image
          src={DbInflated}
          width={49}
          height={200}
          quality={100}
          alt="Holy Cannoli"
        />
      </div>
    </main>
  );
}
