import Link from "next/link";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "../../../../config/inventory";
import ProductGallery from "../product-gallery";
import { ProductInfo } from "../product-info";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const product = await client.fetch<SanityProduct>(
    groq`*[_type == "product" && slug.current == "${params.slug}"][0] {
      _id,
      _createdAt,
      "id": _id,
      name,
      sku,
      images,
      price,
      currency,
      description,
      sizes,
      categories,
      colors,
      "slug": slug.current
    }`
  );
  // Console the product object for testing
  // console.log(product);
  return (
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
        <Link
          href="/cart"
          className="flex items-center ml-4 lg:pointer-events-auto "
        >
          <ShoppingCart className="w-10 h-10 " aria-label="Go to cart" />
        </Link>
      </h1>
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="pt-10 pb-2 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>
    </main>
  );
}
