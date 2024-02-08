// ImageGallery.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchImagesFromFolder } from "../gallery/aws-fetch-shuffle";
import Zoom from "react-medium-image-zoom";
import "../style/style.css";
import { ThreeDots } from "react-loading-icons";

type ImageGalleryProps = {
  folderPrefix: string; // Explicitly typing folderPrefix as a string
};
const ImageGallery: React.FC<ImageGalleryProps> = ({ folderPrefix }) => {
  const [images, setImages] = useState<string[]>([]);
  const [displayedImages, setDisplayedImages] = useState<string[]>([]);
  const [loadIndex, setLoadIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const imagesPerLoad = 10;

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageUrls = await fetchImagesFromFolder(
          "gallery/photos/digital/pixel/"
        );
        setImages(imageUrls);
        setDisplayedImages(
          imageUrls.slice(0, Math.min(imagesPerLoad, imageUrls.length))
        );
        setLoadIndex(Math.min(imagesPerLoad, imageUrls.length));
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setIsLoading(false); // Loading is complete when all initial images are fetched
      }
    };

    loadImages();
  }, [folderPrefix]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && loadIndex < images.length) {
          setIsLoading(true); // Assume more images are being loaded
          const newLoadIndex = Math.min(
            loadIndex + imagesPerLoad,
            images.length
          );
          setDisplayedImages((prevDisplayedImages) => [
            ...prevDisplayedImages,
            ...images.slice(loadIndex, newLoadIndex),
          ]);
          setLoadIndex(newLoadIndex);

          // If after updating, all images are displayed, set loading to false
          if (newLoadIndex >= images.length) {
            setIsLoading(false);
          }
        }
      },
      { threshold: 0.5 }
    );

    // Add a sentinel div at the end of your image gallery in the DOM
    const sentinel = document.querySelector("#image-gallery-sentinel");
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, [images, loadIndex]);

  return (
    <div className="m-8 gap-2 grid grid-cols-gallery">
      {displayedImages.map((imageUrl, index) => (
        <div key={`${imageUrl}-${index}`} className="overflow-hidden">
          <Zoom>
            <div style={{ backgroundColor: "#a7f3d0" }}>
              <Image
                src={imageUrl}
                alt={`Thumbnail ${index}`}
                width={777}
                height={966}
                quality={90}
                className="object-cover"
                priority={index < imagesPerLoad}
              />
            </div>
          </Zoom>
        </div>
      ))}
      {isLoading && (
        <div>
          <ThreeDots className="w-12 h-12" />
        </div>
      )}
      <div id="image-gallery-sentinel" style={{ height: "20px" }}></div>
    </div>
  );
};

export default ImageGallery;
