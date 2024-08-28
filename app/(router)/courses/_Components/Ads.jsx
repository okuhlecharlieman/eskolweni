import React from "react";
import "./ads.css";

export default function Ads() {
  // Array of video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/WS09IRAai7c?si=rfGRcLtPbHJlME9a",
    "https://www.youtube.com/embed/TEIcpEYGYtk?si=NSEljAKb2GF-oEag",
    "https://www.youtube.com/embed/Fht_hT8Yuw8?si=BoEoxTEVlRMtEIXY",
  ];

  return (
    <div className="p-5 mt-5 rounded-lg bg-white">
      <div className="video-container mb-4">
        {videoUrls.map((url, index) => (
          <div className="video-wrapper mb-4" key={index}>
            <iframe
              className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-600"
              src={url}
              title={`YouTube video player ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
