import React from "react";
import Image from "next/image";

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl mt-5 p-5">
      <div className="rounded-xl">
        {" "}
        <Image
          src="/cute.jfif"
          alt="Feature 3"
          width={200}
          height={200}
          className="rounded-3xl"
        />{" "}
      </div>
      <div className="">
        <h2 className="font-bold text-[29px]">Welcome to Eskolweni</h2>
        <h2>Unlocking Education for Everyone, One Click at a Time.</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
