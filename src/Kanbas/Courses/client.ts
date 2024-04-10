import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_API = `${API_BASE}/api/courses`;

export const createCourse = async (course: any) => {
    const response = await axios.post(`${COURSES_API}`, course);
    return response.data;
  };

export const deleteCourse = async (courseId: string) => {
  const response = await axios
    .delete(`${COURSES_API}/${courseId}`);
  return response.data;
};

export const updateCourse = async (course: { _id: any; }) => {
  const response = await axios.
    put(`${COURSES_API}/${course._id}`, course);
  return response.data;
};

export const findCoursesForUser = async (userId: string | undefined) => {
  const response = await axios
    .get(`${COURSES_API}/${userId}/courses`);
  return response.data;
};

export const findCourseById = async (courseId?: string) => {
  const response = await axios.get(
    `${COURSES_API}/${courseId}`
  );
  return response.data;
};
