import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CourseItem from "./CourseItem";
import Image from "next/image";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    let TurnIntoArray = [];
    GlobalApi.getAllCoursesList()
      .then((resp) => {
        console.log("API Response:", resp);
        TurnIntoArray.push(resp?.coursesid);
        console.log("TurnIntoArray Response:", TurnIntoArray);
        setCourseList(TurnIntoArray);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setCourseList([]); // Set an empty array on error
      });
  };
  return (
    <div className=" p-5 mt-5 rounded-lg bg-white">
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold">All courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="free">Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-3">
        {courseList.length > 0
          ? courseList.map((item, index) => (
              <div className="" key={index}>
                {/* <CourseItem course={item} /> */}
                <div className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-600">
                  <Image
                    src={item.banner?.url}
                    width={500}
                    height={150}
                    alt="banner"
                    className="rounded-t-xl"
                  />
                  <div className="flex flex-col gap-1 p-1">
                    <h2 className="font-semibold">{item.name}</h2>
                    <h2 className="font-semibold">
                      {item.free ? "Free" : "Paid"}
                    </h2>
                  </div>
                </div>
              </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              <div
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse"
              >
                No courses available.
              </div>;
            })}
      </div>
    </div>
  );
}

export default CourseList;
