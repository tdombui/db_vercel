// "use client";

// Sanity imports
import { client } from "../../../sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "../../../config/inventory";

// Component imports
import ProductGrid from "../products/product-grid";
import Background from "../components/ui/bg/bg";

interface Props {}

export default async function Page() {
  const products = await client.fetch<SanityProduct[]>(
    groq`*[_type == "product"]
      {
        _id,
        _createdAt,
        name,
        sku,
        images,
        currency,
        price,
        description,
        "slug": slug.current
    }`
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div>
        <ProductGrid products={products} />
      </div>
      <a className="-z-10">
        <Background />
      </a>
    </main>
  );
}
