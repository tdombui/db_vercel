import { Image, PortableTextBlock } from "sanity";

interface InventoryProduct {
  id: string;
  name: string;
  image: string;
  images: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  price: number;
  currency: string;
  description: string;
  sku: string;
}

export interface SanityProduct extends Omit<InventoryProduct, "images"> {
  _id: string;
  _createdAt: Date;
  slug: string;
  images: Image[];
}

export const inventory: InventoryProduct[] = [
  {
    id: "1",
    sku: "db_atb_crew__gry_1_2024",
    name: "All the Best Crewneck - GRY",
    description: `8oz pigment dyed fleece crewneck with embroidered graphic.      +100 STR     +100 DEX     +1,000,000,000 CHARISMA
    `,
    price: 4500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://cdn.sanity.io/images/71yi71sa/production/886c967860c681aaab96319369eb991d2dc663bb-690x677.png",
    images: [
      "https://cdn.sanity.io/images/71yi71sa/production/5769e60b0012899cb34f566df81556efe4dbe9e7-2722x3628.png",
      "https://cdn.sanity.io/images/71yi71sa/production/a8620bde2d2c5c1e2b1abeaba8cd364d527a5609-2146x2851.png",
    ],
    sizes: ["s", "m"],
    categories: ["sweater"],
    colors: ["gry"],
    currency: "USD",
  },

  {
    id: "2",
    sku: "db_atb_crew_brg_1_2024",
    name: "All the Best Crewneck - BRG",
    description: `8oz pigment dyed fleece crewneck with embroidered graphic.      +100 STR     +100 DEX     +1,000,000,000 CHARISMA
    `,
    price: 4500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://cdn.sanity.io/images/71yi71sa/production/35f7dea07571304ebc646b532c9860315d3675b8-690x677.png",
    images: [
      "https://cdn.sanity.io/images/71yi71sa/production/4101237fa3053cc3d1d858ed8142c9f95518cac5-2722x3628.png",
      "https://cdn.sanity.io/images/71yi71sa/production/239664b49ddb318e9fb0ca70cb3989f6a555703a-2146x2851.png",
    ],
    sizes: ["l"],
    categories: ["sweater"],
    colors: ["brg"],
    currency: "USD",
  },
  {
    id: "3",
    sku: "db_atb_hood_tan_1_2024",
    name: "All the Best Hoodie",
    description: `10oz pigment dyed fleece crewneck with embroidered graphic.      +100 STR     +100 INT     +1,000,000,000 CHARISMA
    `,
    price: 6500, // price in smallest currency unit (e.g. cent for USD)
    image:
      "https://cdn.sanity.io/images/71yi71sa/production/61238390d851e537d5431f5d86d5e6f37e7aaa13-690x677.png",
    images: [
      "https://cdn.sanity.io/images/71yi71sa/production/cd209f394a8f59e6d35cb0d0b64b12a3f136bd11-2722x3628.png",
      "https://cdn.sanity.io/images/71yi71sa/production/b9f2c6808a6290561c8982d730d4c5a74ae5aaa1-2146x2851.png",
    ],
    sizes: ["s", "m", "l"],
    categories: ["sweater"],
    colors: ["tan"],
    currency: "USD",
  },
];
