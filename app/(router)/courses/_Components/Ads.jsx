import React from "react";
import "./ads.css";

export default function Ads() {
  // Array of video URLs
  const videoUrls = [
    "https://www.youtube.com/embed/WS09IRAai7c?si=rfGRcLtPbHJlME9a",
    "https://www.youtube.com/embed/TEIcpEYGYtk?si=NSEljAKb2GF-oEag",
    "https://www.youtube.com/embed/Fht_hT8Yuw8?si=BoEoxTEVlRMtEIXY",
    "https://www.youtube.com/embed/-BGGNInCoAI?si=c3ZvmgRe_larvVQN",
  ];

  // Function to shuffle the array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  // Shuffle the video URLs
  const shuffledVideos = shuffleArray([...videoUrls]);

  return (
    <div className="p-5 mt-5 rounded-lg bg-white">
      <div className="video-container mb-4">
        {shuffledVideos.map((url, index) => (
          <div className="video-wrapper mb-4" key={index}>
            <iframe
              className="border rounded-xl hover:shadow-md cursor-pointer"
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