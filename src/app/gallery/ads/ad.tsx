import React, { useEffect, useRef } from "react";

const AdSenseAd = () => {
  const adRef = useRef(null); // Reference to the ad container

  useEffect(() => {
    // Ensure the script is loaded once the ad container is ready
    const loadAdScript = () => {
      const adScript = document.createElement("script");
      adScript.async = true;
      adScript.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6500302006507358";
      adScript.crossOrigin = "anonymous";
      document.body.appendChild(adScript);

      adScript.onload = () => {
        if (window.adsbygoogle && adRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      };
    };

    if (adRef.current) {
      loadAdScript();
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={{ display: "block", width: "320px", height: "100px" }} // Example dimensions
        data-ad-client="ca-pub-6500302006507358"
        data-ad-slot="4186865821"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdSenseAd;
