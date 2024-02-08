"use client";
import { useEffect } from "react";
import { CheckCheck, XCircle } from "lucide-react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
interface Props {}
export function CheckoutSession() {
  if (false) {
    return (
      <>
        <XCircle className="mx-auto h-10 w-10 text-red-400" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl">
          No checkout session found
        </h1>
      </>
    );
  }
  return (
    <>
      <div className="flex items-center justify-center pt-10">
        <CheckCheck className="h-20 w-20 text-emerald-50 dark:text-emerald-50" />
        <h1 className="ml-4 mt-4 text-4xl font-bold tracking-tight text-emerald-50 dark:text-emerald-50 sm:text-4xl">
          Order Successful
        </h1>
      </div>
      <h3 className="mt-8 text-2xl leading-7">
        Thank you! Check your email for the receipt and updates on shipment.
      </h3>
      <p className="mt-8"></p>
    </>
  );
}
