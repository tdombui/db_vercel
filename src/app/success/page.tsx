"use client";
import Link from "next/link";
import Image from "next/image";
import { CheckoutSession } from "../components/checkout-session";
import Background from "../components/ui/bg/bg";
import { useShoppingCart } from "use-shopping-cart";
import Db from "../../../public/db-inflated.png";

interface Props {}

export default function CheckoutSuccessPage() {
  const { cartDetails } = useShoppingCart();
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <CheckoutSession />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="hover:background lg:p-8  hover:drop-shadow-glow"
          >
            <Image src={Db} alt="DB Logo" width={121} height={121} />
          </Link>
          <a
            href="/contact"
            className="rounded-md bg-emerald-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
          >
            Contact us <span aria-hidden="true">&rarr;</span>
          </a>
          <Background />
        </div>
      </div>
    </main>
  );
}
