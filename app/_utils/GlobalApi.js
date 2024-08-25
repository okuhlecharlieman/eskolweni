const MASTER_url ="https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/"+process.env.NEXT_PUBLIC_HYGRAPH_API_KEY+"/master";
import { gql, request } from "graphql-request";

console.log("master url", MASTER_url);

const getAllCoursesList = async () => {
  const query = gql`
      query MyQuery {
  coursespluralid {
        banner {
          url
        }
        chapters {
          ... on Chapter1Id {
            id
            name
            chapterContent
          }
          ... on Chapter2Id {
            id
            name
            chapterContent
          }
          ... on Chapter3Id {
            id
            name
            chapterContent
          }
          ... on Chapter4Id {
            id
            name
            chapterContent
          }
        }
        desription
        free
        name
        id
        totalChapters
        tags
        sourceCode
      }
    }
  `;
  const result = await request(MASTER_url, query);

  return result;
};

const getCourseWithChapters = async (courseId) => {
  if (!courseId) {
    throw new Error("Course ID is required");
  }

  const query = gql`
    query CourseWithChapters($courseId: ID!) {
      coursesid(where: { id: $courseId }) {
        id
        name
        chapters {
          ... on Chapter1Id {
            id
            name
            chapterContent
          }
          ... on Chapter2Id {
            id
            name
            chapterContent
          }
          ... on Chapter3Id {
            id
            name
            chapterContent
          }
          ... on Chapter4Id {
            id
            name
            chapterContent
          }
         ... on Chapter5Id {
            id
            name
            chapterContent
          }
             ... on Chapter6Id {
            id
            name
            chapterContent
          }
             ... on Chapter7Id {
            id
            name
            chapterContent
          }
             ... on Chapter8Id {
            id
            name
            chapterContent
          }
             ... on Chapter9Id {
            id
            name
            chapterContent
          }
             ... on Chapter10Id {
            id
            name
            chapterContent
          }
        }
      }
    }
  `;
  
  try {
    const variables = { courseId: courseId };
    console.log("Sending request with variables:", variables);
    const result = await request(MASTER_url, query, variables);
    console.log("Received result:", result);
    return result;
  } catch (error) {
    console.error("GraphQL Error:", error);
    throw error;
  }
};

export default { getAllCoursesList, getCourseWithChapters };
