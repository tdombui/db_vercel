"use client";
import { CartProvider } from "use-shopping-cart";
import { Toaster } from "./ui/toaster";
// import { TailwindIndicator } from "./tailwind-indicator";
import { ThemeProvider } from "./ui/theme-provider";

interface Props {
  children: React.ReactNode;
}

export function Providers({ children }: Props) {
  return (
    <CartProvider
      currency="USD"
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.STRIPE_PUBLIC!}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Toaster />
        {children}
        {/* <TailwindIndicator /> */}
      </ThemeProvider>
    </CartProvider>
  );
}
