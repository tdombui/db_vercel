import Image from "next/image";
import Link from "next/link";
import { CartItems } from "../components/cart-items";
import { ArrowLeft } from "lucide-react";
import { CartSummary } from "../components/cart-summary";
import Background from "../components/ui/bg/bg";

export default function Page() {
  return (
    <div>
      <main className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1
          className="flex items-center justify-center mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl"
          style={{ userSelect: "none" }}
        >
          <Link
            href="/shop"
            className="flex items-center mr-4 lg:pointer-events-auto "
          >
            <ArrowLeft className="w-10 h-10 " aria-label="Go back" />
          </Link>
          INSOMNYC
        </h1>

        <form className="mt-6 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>
            {/* Cart Items */}
            <CartItems />
          </section>
          {/* Cart Summary */}
          <CartSummary />
        </form>
      </main>
      <a className="-z-10">
        <Background />
      </a>
    </div>
  );
}

// <main className="flex min-h-screen flex-col items-center justify-between">
// <motion.h1
//   initial={{ opacity: 0, scale: 0 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{
//     type: "spring",
//     duration: 0.25,
//   }}
//   className="flex items-center justify-center mt-2 text-4xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl"
// >
//   <Link href="/" className="flex items-center mr-4 ">
//     <ArrowLeft className="w-10 h-10 " />
//   </Link>
