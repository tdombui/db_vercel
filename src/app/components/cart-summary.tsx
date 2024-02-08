"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Loader2 } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Clock, X } from "lucide-react";
import { Button } from "../components/ui/button";
import Stripe from "../../../public/stripe.png";
import "../contact/local-css/contact.css";

export function CartSummary() {
  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart();
  const [isLoading, setLoading] = useState(false);
  const isDisabled = isLoading || cartCount! == 0;
  // FOR TESTING
  // useEffect(() => {
  // Log the STRIPE_SECRET_KEY when the component mounts for testing
  // console.log(
  //   "NEXT_PUBLIC_STRIPE_PUBLIC_KEY:",
  //   process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
  // );
  // }, []);
  const stripePromise = loadStripe(
    "pk_live_51M3m1oJCALE6x3m3g9kKyR6PPikf89gXZTLZf5fVkM5m7xG4rnvzuFT7QQdgXWIME0sp0XVGt7NxeJUDzSXhqqsw00j598gQsK"
  );
  async function onCheckout() {
    setLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartDetails),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}`,
      },
    });
    if (!response.ok) {
      console.error(`Server responded with status ${response.status}`);
      setLoading(false);
      return;
    }
    const data = await response.json();
    console.log("Server response:", data);
    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({ sessionId: data.id });
    if (result?.error) {
      console.log(result);
    }
    setLoading(false);
  }
  return (
    <section
      aria-labelledby="summary-heading"
      className="drop-shadow-lg mt-16 rounded-xl border-2 border-white px-4 py-6 shadow-md dark:border-gray-900 dark:bg-black sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 card-p"
      style={{
        userSelect: "none",
      }}
    >
      <h2 id="summary-heading" className="text-3xl font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">
            <strong>Shipping + Tax</strong>
          </dt>
          <dd className="text-2xs">Calculated at checkout</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 dark:border-gray-600">
          <dt className="text-base font-medium">
            <strong>Subtotal</strong>
          </dt>
          <dd className="text-base font-lg">{formattedTotalPrice}</dd>
        </div>
      </dl>
      <p className="mt-4 flex space-x-2 text-2xs">
        <Clock className="mt-0 h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="-mt-0.5">Allow 1-2 weeks for delivery</span>
      </p>
      <div className="mt-6">
        <Button
          onClick={onCheckout}
          className="w-full bg-emerald-200 drop-shadow-md text-emerald-900 hover:bg-rose-300"
          disabled={isDisabled}
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isLoading ? "Loading..." : "Checkout"}
        </Button>
      </div>
      <div className="flex mt-4 -mb-2 flex-col items-center justify-center">
        <Image
          src={Stripe}
          width={96}
          quality={100}
          alt="Powered by Stripe"
          style={{
            userSelect: "none",
          }}
          className="drop-shadow-md"
        />
      </div>
    </section>
  );
}
