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

function Ads() {
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
        <h2 className="text-[20px] font-bold">Ads</h2>
      </div>
    </div>
  );
}

export default Ads;
