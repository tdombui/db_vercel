"use client";
import Link from "next/link";
import Image from "next/image";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <h3 className="mt-1 text-4xl font-semibold">👀</h3>
        <p className="mt-1">There&#39;s nothing in your cart</p>
        <Link href="/shop">
          <Button size="sm" className="relative">
            <Plus className="mr-2 h-4 w-4" />
            Shop
          </Button>
        </Link>
      </div>
    </div>
  );
}
