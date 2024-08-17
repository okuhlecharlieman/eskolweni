import Image from "next/image";
import React from "react";

function CourseItem(course) {
  console.log("imaga: ", course?.banner?.url);
  return (
    <div>
      <Image
        src={course[0]?.banner?.url}
        width={500}
        height={150}
        alt="banner"
      />
    </div>
  );
}

export default CourseItem;
