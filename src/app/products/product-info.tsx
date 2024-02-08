"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { SanityProduct } from "../../../config/inventory";
import { getSizeName, getColorName } from "../../../lib/utils";
import { Button } from "../components/ui/button";
import { useToast } from "../components/ui/use-toast";
import Background from "../components/ui/bg/bg";
import GreenSticker from "../../../public/shop/green-sticker.png";

const roboto = Roboto({ weight: ["700"], subsets: ["latin"] });
interface Props {
  product: SanityProduct;
}
export function ProductInfo({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState(
    product.colors[0] === "brg" ? "l" : product.sizes[0]
  );
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const { addItem, incrementItem, cartDetails } = useShoppingCart();
  const { toast } = useToast();
  const isInCart = !!cartDetails?.[product._id];
  function addToCart() {
    const item = {
      ...product,
      id: product._id, // Keep the original product ID
      name: product.name,
      price: product.price,
      currency: product.currency,
      product_data: {
        // Additional data for cart display and management
        color: selectedColor,
        size: selectedSize,
      },
      uniqueId: `${product._id}-${selectedColor}-${selectedSize}`,
    };
    // Check if selected size and/or color is available
    const isSizeAvailable =
      (selectedColor === "brg" && selectedSize === "l") ||
      (selectedColor === "gry" && ["s", "m"].includes(selectedSize)) ||
      selectedColor === "tan";
    // Toast Notification
    if (isSizeAvailable) {
      isInCart ? incrementItem(item._id) : addItem(item);
      toast({
        title: `
        ${item.name} 
        (${getSizeName(selectedSize)}) 
        (${getColorName(selectedColor)})
        `,
        description: "added to cart",
        action: (
          <Link href="/cart">
            <Button variant="link" className="gap-x-2 whitespace-nowrap">
              <span>View cart</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        ),
      });
    } else {
      // Show message indicating the selected size and color combination is not available
      toast({
        title: "Item Not Available",
        description: `The selected size (${getSizeName(
          selectedSize
        )}) and color (${getColorName(
          selectedColor
        )}) combination is not available.`,
      });
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="mt-6 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <h1
          className={`${roboto.className} antialiased bg-blend-multiply text-2hxl font-bold tracking-tight`}
          style={{
            userSelect: "none",
          }}
        >
          {product.name}
        </h1>
        <div className="mt-3">
          <h2 className="sr-only ">Product information</h2>
          <div className="text-2txl tracking-tight">
            <div className="relative mb-5 ">
              <strong className=" text-black top-2.5 left-5 opacity-70 drop-shadow-sm relative z-10">
                <p
                  className={`${roboto.className} antialiased bg-blend-multiply`}
                  style={{
                    userSelect: "none",
                  }}
                >
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </p>
              </strong>
              <Image
                src={GreenSticker}
                alt="Green Sticker"
                width={100}
                className="absolute -top-1 left-1 z-0 drop-shadow-md rounded-md"
                style={{
                  userSelect: "none",
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 text-sm">
          <h3 className="sr-only text-sm">Description</h3>
          <div
            className="space-y-6 text-base"
            style={{
              userSelect: "none",
            }}
          >
            {product.description}
          </div>
        </div>
        <div className="mt-4">
          {/* SIZE PICKER */}
          <p
            className="text-sm mt-4"
            style={{
              userSelect: "none",
            }}
          >
            Size: <strong>{getSizeName(selectedSize)}</strong>
          </p>
          {product.sizes.map((size) => (
            // Some sizes are not available for certain colors
            <Button
              onClick={() => setSelectedSize(size)}
              key={size}
              variant={
                (selectedSize === size && selectedColor === "tan") ||
                (selectedSize === size && selectedColor === "gry") ||
                (selectedSize === "l" && selectedColor === "brg")
                  ? "outline"
                  : "default"
              }
              disabled={
                (selectedColor === "brg" && size !== "l") ||
                (selectedColor === "gry" && !["s", "m"].includes(size))
              }
              className="mr-2 mt-4 drop-shadow-md"
              style={{
                userSelect: "none",
              }}
            >
              {getSizeName(size)}
            </Button>
          ))}
          {/* COLOR PICKER */}

          <p
            className="text-sm mt-5"
            style={{
              userSelect: "none",
            }}
          >
            Color: <strong>{getColorName(selectedColor)}</strong>
          </p>
          {product.colors.map((color) => (
            <Button
              onClick={() => setSelectedColor(color)}
              key={color}
              variant={selectedColor === color ? "outline" : "default"}
              className="mr-2 mt-4 "
              style={{
                userSelect: "none",
              }}
            >
              {getColorName(color)}
            </Button>
          ))}
        </div>
        <div>
          <form className="mt-10">
            <div className="mt-4 flex">
              <Button
                type="button"
                onClick={addToCart}
                className="w-5/12 bg-emerald-200 py-6 text-base font-medium text-emerald-900 hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-emerald-200 mr-4"
                style={{
                  userSelect: "none",
                }}
              >
                Add to Cart
              </Button>
            </div>
          </form>
        </div>
      </div>
      <a className="-z-10">
        <Background />
      </a>
    </main>
  );
}
