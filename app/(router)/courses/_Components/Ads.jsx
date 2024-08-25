import React, { useEffect } from "react";

function Ads() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5922051928401423";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    (window.adsbygoogle = window.adsbygoogle || []).push({});

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-5 mt-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
        {/* <h2 className="text-[20px] font-bold">Ads</h2> */}
        <div style={{ width: "100%", minWidth: "200px", height: "320px" }}>
          <ins
            className="adsbygoogle"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
            }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-5922051928401423"
            data-ad-slot="2031609536"
          />
        </div>
      </div>
    </div>
  );
}

export default Ads;
