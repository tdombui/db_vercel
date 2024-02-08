import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchImagesFromFolder } from "./aws-fetch";

// const s3BucketUrl = "https://s3-us-west-1.amazonaws.com/dombui-photos/bg/";

const BackgroundAws: React.FC<{ backgroundIndex: number }> = ({
  backgroundIndex,
}) => {
  const [backgroundImages, setBackgroundImages] = useState<string[]>([]);

  useEffect(() => {
    // Assuming your images are stored in a folder named 'bg' in your S3 bucket
    fetchImagesFromFolder("bg").then((images) => {
      setBackgroundImages(images);
    });
  }, []);
  // Ensures that we don't try to access an image if the array is empty or the index is out of bounds
  const imageUrl =
    backgroundImages.length > 0
      ? backgroundImages[backgroundIndex % backgroundImages.length]
      : "";

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-10] overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Background"
          width={1080}
          height={1080}
          quality={100}
          className="object-cover w-full h-full"
          style={{ userSelect: "none" }}
        />
      )}
    </div>
  );
};

export default BackgroundAws;
