import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import "../libs/bootstrap/bootstrap.min.css"
import "../libs/font-awesome/css/font-awesome.min.css"
import Assignments from "./Assignments";

function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const topText = " > Modules"
  return (
    <div className="d-flex container-fluid ps-0">
      <div className="flex-grow-1">
        <div className="wd-modules" style={{
          "paddingLeft": "20px",
          "paddingRight": "14px"
        }}>
          <a href="/kanbas/Courses/Modules/hamburger.html">
            <i className="fa fa-bars fa-2x inline" aria-hidden="true" style={{ "color": "black" }}></i>
          </a>
          &nbsp;
          &nbsp;
          &nbsp;
          <h4 className="inline">
            &nbsp;
            <a href="#">
            {course?.number} {course?.startDate}
            </a>
            {topText}
          </h4>
          <a href="/Kanbas/Courses/Modules/chevron.html">
            <button className="d-inline d-md-none btn btn-light btn-lg btn-outline-dark ms-1 rounded-0 border pull-right inline"
              style={{ "marginTop": "4px" }}>
              <div className="pt-n1" style={{ "margin": "4px" }}>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </div>
            </button>
          </a>
          <button className="btn btn-light btn-outline-dark rounded-0 border pull-right inline" >
            <div className="pt-n1">
              <i className="fa fa-eye pt-3" aria-hidden="true"></i>
              <i className="d-none d-md-inline">
                Student View
              </i>
            </div>
          </button>

        </div>
        <hr style={{ "marginLeft": "25px", "marginRight": "20px" }} />

        <div className="container-fluid d-flex">
          <div className="d-none d-md-block" style={{ "width": "150px" }}>
            <div className="container">
              <div className="row">
                <div className="col-1">

                </div>
                <div className="col-11">
                  <span style={{ "color": "grey" }}>202410_1 Fall 2024 Semester</span>
                </div>
                <div className="col-12 course-nav">
                  {/*Copy Course Navigation Here 2222*/}
                  <div className="d-none d-md-block">
                    <CourseNavigation />
                  </div>
                </div>
              </div>

            </div>


          </div>
              <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route path="Assignments/:assignmentId"
                  element={<h1>Assignment Editor</h1>} />
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>

        </div>

      </div>
    </div>
      );
}
      export default Courses;