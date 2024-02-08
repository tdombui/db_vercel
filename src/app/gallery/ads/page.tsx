"use client";
import AdSenseAd from "./ad";

// Your component
const AdGallery: React.FC = () => {
  return (
    <div className="m-8 gap-2 grid grid-cols-gallery">
      <div style={{ backgroundColor: "#a7f3d0", padding: "10px" }}>
        <AdSenseAd />
      </div>
    </div>
  );
};

export default AdGallery;
