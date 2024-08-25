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
import Link from "next/link";

function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getAllCourses();
  }, []);
  const getAllCourses = () => {
    let TurnIntoArray = [];
    GlobalApi.getAllCoursesList()
      .then((resp) => {
        console.log("API Response:", resp);
        console.log("Array Response:", resp.coursespluralid);
        setCourseList(resp.coursespluralid);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setCourseList([]); // Set an empty array on error
        setIsLoading(false);
      });
  };
  return (
    <div className="p-5 mt-5 rounded-lg bg-white">
      <div className="flex items-center justify-between mb-4">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="w-full h-[240px] rounded-xl bg-slate-200 animate-pulse"
              ></div>
            ))
          : courseList.map((item, index) => (
              <Link href={`/course-preview/${item.id}`}>
                <div
                  key={index}
                  className="border rounded-xl hover:shadow-md cursor-pointer hover:shadow-purple-600"
                >
                  <Image
                    src={item.banner?.url}
                    width={500}
                    height={150}
                    alt="banner"
                    className="rounded-t-xl w-full h-[150px] object-cover"
                  />
                  <div className="flex flex-col gap-1 p-3">
                    <h2 className="font-semibold">{item.name}</h2>
                    <div className="flex  justify-between items-center">
                      {" "}
                      <h2 className="text-sm text-gray-500">
                        {item.free ? "Free" : "Paid"}
                      </h2>
                      <h2 className="text-sm text-gray-500">
                        {" "}
                        Chapters:
                        {item.totalChapters}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export default CourseList;
