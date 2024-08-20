"use client";
import React, { useEffect, useState } from "react";
import GlobalApi from "@/app/_utils/GlobalApi";

function CoursePreview({ params = { courseId: "clzwxkttu01ii08lb3v2o2nsn" } }) {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedChapters, setExpandedChapters] = useState({}); // State to track expanded chapters

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

  // Toggle function for expanding/collapsing chapters
  const toggleChapter = (chapterId) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId], // Toggle the current chapter's expanded state
    }));
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="p-5 m-5 rounded-lg bg-white">
      <div className=" mb-4">
        <h1 className="text-2xl font-bold mb-4">{course.name}</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Chapters:</h2>
          <ul className="list-disc pl-5">
            {course.chapters.map((chapter) => (
              <li key={chapter.id} className="mb-2">
                <div className="flex items-center justify-between">
                  <h3
                    className="font-semibold cursor-pointer"
                    onClick={() => toggleChapter(chapter.id)}
                  >
                    {chapter.name}
                  </h3>
                  <button
                    className="ml-2 text-blue-500"
                    onClick={() => toggleChapter(chapter.id)}
                  >
                    {expandedChapters[chapter.id] ? "-" : "+"}
                  </button>
                </div>
                {expandedChapters[chapter.id] && (
                  <div className="text-sm text-gray-600 md:text-base lg:text-lg xl:text-xl">
                    {/* <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 h-48 md:h-64 lg:h-80 xl:h-96 "> */}
                    <pre>{chapter.chapterContent}</pre>
                    {/* </div> */}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CoursePreview;
