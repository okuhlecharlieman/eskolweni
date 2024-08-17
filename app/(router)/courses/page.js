"use client";
import React from "react";
import WelcomeBanner from "./_Components/WelcomeBanner";
import CourseList from "./_Components/CourseList";

function courses() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 p-5">
      <div className="col-span-3">
        {" "}
        <WelcomeBanner />
        <CourseList />
      </div>
      <div className=""></div>
    </div>
  );
}

export default courses;
