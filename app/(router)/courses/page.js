import React from "react";
import WelcomeBanner from "./_Components/WelcomeBanner";

function courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-5">
      <div className="col-span-2">
        {" "}
        <WelcomeBanner />
      </div>
      <div className=""></div>
    </div>
  );
}

export default courses;
