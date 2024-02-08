"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import { SanityProduct } from "../../../config/inventory";

interface Props {
  product: SanityProduct;
}

export default function ProductGallery({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setSelectedImage(window.innerWidth < 640 ? 0 : selectedImage);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedImage]);

  return (
    <div className="flex lg:justify-start lg:items-start">
      {/* Image Grid */}
      <div className="lg:w-1/4 mx-auto mt-6 hidden lg:block -mr-12">
        <ul
          className="flex flex-col "
          style={{
            userSelect: "none",
          }}
        >
          {product.images.map((image, index) => (
            <div
              key={image._key as string}
              onClick={() => setSelectedImage(index)}
              className={`cursor-pointer ${
                index === selectedImage
                  ? "border-4 border-emerald-200 rounded-lg"
                  : ""
              }`}
              style={{
                width: "80px",
                height: "80px",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <span className="relative w-20">
                <Image
                  src={urlForImage(image)}
                  width={200}
                  height={200}
                  alt="Thumbnail"
                  className=""
                  layout="responsive"
                />
              </span>
            </div>
          ))}
        </ul>
      </div>

      {/* Main Image */}
      <div
        className="lg:w-3/4 lg:pl-8 aspect-h-1 aspect-w-1 w-full"
        style={{
          userSelect: "none",
        }}
      >
        <Image
          priority
          src={urlForImage(product.images[selectedImage])}
          alt={`Main ${product.name} image`}
          width={800} // Increased width for a larger main image
          height={1000} // Adjusted height accordingly
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
