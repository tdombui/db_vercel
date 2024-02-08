"use client";
import { Studio } from "sanity";
import defineConfig from "../../../../sanity.config";

export default function AdminPage() {
  return (
    <div suppressHydrationWarning>
      <Studio config={defineConfig} />
    </div>
  );
}
