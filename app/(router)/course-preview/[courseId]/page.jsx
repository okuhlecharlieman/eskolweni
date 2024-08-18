"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

function CoursePreview({ params = { courseId: "clzwxkttu01ii08lb3v2o2nsn" } }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        setLoading(true);
        const result = await GlobalApi.getCourseWithChapters(params.courseId);
        console.log("results:", result);

        // Access the course data correctly
        const courseData = result?.coursesid;

        if (courseData) {
          setCourse(courseData);
        } else {
          setError("Course data not found.");
        }
      } catch (err) {
        console.error("Error fetching course:", err);
        setError("Failed to fetch course data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [params.courseId]); // Include courseId in the dependency array

  // Render loading, error, or course content
  //   const renderContent = () => {

  // if (error) {
  //   return <div className="text-red-500">{error}</div>;
  // }

  // if (!course) {
  //   return <div>No course found.</div>;
  // }

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Chapters:</h2>
        <ul className="list-disc pl-5">
          {course.chapters.map((chapter) => (
            <li key={chapter.id} className="mb-2">
              <h3 className="font-semibold">{chapter.name}</h3>
              <p className="text-sm text-gray-600">{chapter.chapterContent}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  //     <div className="p-4">
  //       <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
  //       <div className="mb-4">
  //         <h2 className="text-xl font-semibold">Chapters:</h2>
  //         <ul className="list-disc pl-5">
  //           {course.chapters.map((chapter) => (
  //             <li key={chapter.id} className="mb-2">
  //               <h3 className="font-semibold">{chapter.name}</h3>
  //               <p className="text-sm text-gray-600">
  //                 {chapter.chapterContent.substring(0, 100)}...
  //               </p>
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
}

//   return renderContent();
// }

export default CoursePreview;
