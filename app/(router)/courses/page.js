"use client";
import React from "react";
import WelcomeBanner from "./_Components/WelcomeBanner";
import CourseList from "./_Components/CourseList";
import Ads from "./_Components/Ads";

function courses() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <WelcomeBanner />
          <CourseList />
        </div>
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            <Ads />
          </div>
        </div>
      </div>
    </div>
  );
}

export default courses;
