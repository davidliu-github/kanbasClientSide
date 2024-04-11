import Nav from "../Nav";
import Account from "./Account";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import axios from "axios";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import { Course } from "./Courses/client";


const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses/`;


export default function Kanbas() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [course, setCourse] = useState({
    _id: "", name: "", number: "",
    startDate: "", endDate: "", image: "", term: "",
    department: "", credits: 0, description: ""
  });

  const fetchCourses = async () => {
    const courses = await client.findAllCourses();
    setCourses(courses);
  };

  const addNewCourse = async () => {
    const newCourse = await client.createCourse(course);
    setCourses([newCourse, ...courses]);
  };

  const deleteCourse = async (courseId: any) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((c) => c._id !== courseId));
    } catch (error) {
      console.log(error);
    }
  };

  const updateCourse = async () => {
    try {
      await client.updateCourse(course);
      setCourses(courses.map((c) => c._id === course._id ? course : c));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => { fetchCourses(); }, []);
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse} />} />
            <Route path="Courses/:courseId/*" element={<Courses />} />
          </Routes>

        </div>
      </div>
    </Provider>
  );
}