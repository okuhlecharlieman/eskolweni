import React from "react";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <div className="">Image</div>
      <div className="">
        <h2 className="font-bold text-[29px]">Welcome to Eskolweni</h2>
        <h2>Slogan</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
