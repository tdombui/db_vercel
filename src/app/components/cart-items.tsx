"use client";
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "../../../sanity/lib/image";
import { X } from "lucide-react";
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";
import { getColorName, getSizeName } from "../../../lib/utils";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useToast } from "../components/ui/use-toast";
import { CartItemsEmpty } from "../components/cart-items-empty";

export function CartItems() {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart();
  const cartItems = Object.entries(cartDetails!).map(([_, product]) => product);
  const { toast } = useToast();

  function removeCartItem(product: Product) {
    const productData = product.product_data as {
      color?: string;
      size?: string;
    };
    const itemId = `${product._id}-${productData.color}-${productData.size}`;
    removeItem(product._id); // Use this uniqueId to correctly identify the item in the cart

    toast({
      title: `${product.name}`,
      description: `Size: ${getSizeName}, Color: ${getColorName}`,
      variant: "destructive",
    });
  }
  if (cartItems.length === 0) return <CartItemsEmpty />;

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-500 dark:border-gray-500"
    >
      {cartItems.map((product, productIdx) => (
        <li key={product._id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              src={urlForImage(product.images[0])}
              alt={"Product Image"}
              width={90}
              height={90}
              quality={100}
              className="h-24 w-24 object-cover object-center sm:h-24 sm:w-24"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-medium"
                    >
                      <strong>{product.name}</strong>
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </p>
                <p className="mt-1 text-sm font-medium">
                  {/* @ts-ignore */}
                  {getSizeName(product.product_data?.size)}
                </p>
                <p className="mt-1 text-sm font-medium">
                  {/* @ts-ignore */}
                  {getColorName(product.product_data?.color)}
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-20"
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={(event) =>
                    setItemQuantity(product._id, Number(event.target.value))
                  }
                />
                <div className="absolute right-0 top-0">
                  <Button
                    variant="ghost"
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <X className="h-5 w-5" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
