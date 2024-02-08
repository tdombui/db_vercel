"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlForImage } from "../../../sanity/lib/image";
import {
  ArrowLeft,
  ShoppingCart,
  ShoppingBasket,
  XCircle,
  Sun,
  Moon,
  Sunrise,
  Sunset,
} from "lucide-react";
import { SanityProduct } from "../../../config/inventory";
import pMets from "../../../public/about/p-mets.png";
import pDodgers from "../../../public/about/p-dodgers.png";

interface Props {
  products: SanityProduct[];
}
const mottos = [
  "never sleeping, always dreamning",
  "whatever gets you through the night",
  "to wake, perchance to dream",
  "body in LA, mind in NYC",
  "when I slept, I dreamt to wake again!",
  "dreams are toys",
  "keep it a buck & good luck",
  "day job after moonlighting",
];
export default function ProductGrid({ products }: Props) {
  const [randomMotto, setRandomMotto] = useState("");
  const [laTime, setLaTime] = useState("");
  const [nyTime, setNyTime] = useState("");
  // Function to select a random motto from the array
  useEffect(() => {
    const getRandomMotto = () => {
      const randomIndex = Math.floor(Math.random() * mottos.length);
      return mottos[randomIndex];
    };
    // Set the random motto when the component mounts
    setRandomMotto(getRandomMotto());
    // Function to get current time in LA
    const getLaTime = () => {
      const now = new Date();
      const laTime = now
        .toLocaleTimeString("en-US", {
          timeZone: "America/Los_Angeles",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // Use 24-hour clock
        })
        .replace(/:\d+ /, " ");
      setLaTime(laTime);
    };
    // Function to get current time in New York
    const getNyTime = () => {
      const now = new Date();
      const nyTime = now
        .toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false, // Use 24-hour clock
        })
        .replace(/:\d+ /, " ");
      setNyTime(nyTime);
    };
    // Call the time functions
    getLaTime();
    getNyTime();
    // Update time every minute
    const interval = setInterval(() => {
      getLaTime();
      getNyTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once on mount
  const getIconByTime = (time: string) => {
    const hour = parseInt(time.split(":")[0]);
    if (hour >= 5 && hour <= 6) {
      return <Sunrise className="h-5 w-5" />;
    } else if (hour > 6 && hour <= 17) {
      return <Sun className="h-5 w-5" />;
    } else if (hour > 17 && hour <= 18) {
      return <Sunset className="h-5 w-5" />;
    } else {
      return <Moon className="h-5 w-5" />;
    }
  };
  if (products.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
        className="mx-auto grid h-40 w-full place-items-center rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900"
      >
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found 😖
          </h1>
        </div>
      </motion.div>
    );
  }
  return (
    <main className="">
      <div className="fixed top-0 left-0 right-0 " style={{ zIndex: 9999 }}>
        {/* <NewsTicker /> */}
        <motion.h1
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center mt-2 text-5xl font-bold tracking-tight text-white dark:text-gray-200 sm:text-2xl"
          style={{ userSelect: "none" }}
        >
          <Link
            href="/"
            className="flex items-center mr-4 lg:pointer-events-auto "
          >
            <motion.div
              initial={{ opacity: 0, x: 800 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowLeft className="w-10 h-10 " aria-label="Go back" />
            </motion.div>
          </Link>
          INSOMNYC
          <Link
            href="/cart"
            className="flex items-center ml-4 lg:pointer-events-auto "
          >
            <ShoppingCart className="w-10 h-10 " aria-label="Go to cart" />
          </Link>
        </motion.h1>
        {/* RANDOM MOTTO */}
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.25,
          }}
          className="flex items-center justify-center -mt-4 text-xs"
          style={{ userSelect: "none" }}
        >
          {randomMotto}
        </motion.p>
      </div>
      {/* Text clocks for Los Angeles and New York */}
      <div
        className="fixed bottom-0 left-0 right-0 p-4 "
        style={{ zIndex: 9999, userSelect: "none" }}
      >
        {/* Text clocks and images for Los Angeles and New York */}
        <div className="flex items-center justify-center text-xs text-emerald-50 dark:text-emerald-50">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.25,
            }}
            className="flex items-center mr-8"
          >
            <Image
              src={pDodgers}
              width={20}
              height={20}
              className="mr-1"
              alt="Los Angeles"
            />
            <p className="">{laTime}</p>{" "}
            <a className="ml-1">{getIconByTime(laTime)}</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.25,
            }}
            className="flex items-center ml-8"
          >
            <Image
              src={pMets}
              width={20}
              height={20}
              className="mr-1"
              alt="New York City"
            />
            <p>{nyTime}</p> <a className="ml-1">{getIconByTime(nyTime)}</a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          duration: 0.25,
        }}
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20 p-4"
      >
        {!products ||
          products.map((product) => (
            <Link
              key={product._id}
              href={`/products/${product.slug}`}
              className="group text-sm"
            >
              <div>
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={urlForImage(product.images[0])}
                    alt={product.name}
                    width={300}
                    height={300}
                    quality={100}
                    className="h-full w-full object-cover object-center mt-20"
                  />
                ) : (
                  <div>Something broke 😖</div>
                )}
              </div>
            </Link>
          ))}
      </motion.div>
    </main>
  );
}
