import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./index.css";
import "../libs/bootstrap/bootstrap.min.css"
import "../libs/font-awesome/css/font-awesome.min.css"

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
              CS4550.12631.202410
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
                    <div>
                      <div>
                        <Routes>
                          <Route path="/" element={<Navigate to="Home" />} />
                          <Route path="Home" element={<h1>Home</h1>} />
                          <Route path="Modules" element={<Modules />} />
                          <Route path="Assignments"
                            element={<h1>Assignments</h1>} />
                          <Route path="Assignments/:assignmentId"
                            element={<h1>Assignment Editor</h1>} />
                          <Route path="Grades" element={<h1>Grades</h1>} />
                        </Routes>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>


          </div>
          <div className="flex-fill">
            {/*Copy Main Content Here 3333*/}
            <div className="container-fluid pe-4">
              <div className="row d-flex justify-content-end">
                <div className="col-8">
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="button">
                  Collapse All
                </button>
                <button type="button">
                  View Progress
                </button>
                <button type="button">
                  <i className="fa fa-check-circle green-white" style={{ "color": "green" }} aria-hidden="true"></i>
                  Publish All
                </button>
                <button type="button" style={{ "backgroundColor": "red", "color": "white", "borderWidth": "1px" }}>
                  + Module
                </button>
                <button type="button">
                  <i className="fa fa-ellipsis-v"></i>
                </button>
              </div>

              <hr />
              <Modules></Modules>
            </div>
          </div>
          {/*<!-- 4444 -->*/}
          <div className="flex-grow-0 me-2 d-none d-xl-block right-pane" style={{ "width": "270px" }}>
            <div className="container-fluid right-pane">

              <div className="row">

                Course Status

                <hr />
              </div>
              <div className="row">
                <div className="col-6 px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0 ">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <i>
                      Published
                    </i>
                  </button>
                </div>
                <div className="col-6 px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0 bg-success text-white">
                    <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <i>
                      Unpublished
                    </i>

                  </button>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-file-o" aria-hidden="true"></i>
                    <i>
                      Import Existing Content
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                    <i>
                      Import from Commons
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-file" aria-hidden="true"></i>
                    <i>
                      Choose Home Page
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    <i>
                      View Course Stream
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-bullhorn" aria-hidden="true"></i>
                    <i>
                      New Announcement
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    <i>
                      New Analytics
                    </i>
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col px-0">
                  <button className="btn btn-light w-100 btn-outline-dark rounded-0">
                    <i className="fa fa-bell-o" aria-hidden="true"></i>
                    <i>
                      View Course Notifications
                    </i>
                  </button>
                </div>
              </div>


              <div className="row">
                <div className="col bold-heading">
                  To Do
                </div>
                <hr />
              </div>
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-info-circle d-flex" style={{ "color": "red" }}
                    aria-hidden="true"></i>
                </div>
                <div className="col-11">
                  <a href="#">
                    Grades A1 - ENV + HTML
                  </a>
                  <i className="fa fa-times" aria-hidden="true" style={{ "float": "right" }}></i>
                  <br />
                  100 Points - Sept 11 at 11:59PM

                </div>
              </div>

              <div>
                <label className="bold-heading">Coming Up</label>
                <span className="calander-align"> <i className="fa fa-calendar-o" aria-hidden="true"></i> <a href="#">View
                  Calander</a></span>
              </div>
              <hr />
              <div className="row mb-3">
                <div className="col-1">
                  <i className="fa fa-calendar-o d-flex justify-content-center" aria-hidden="true"></i>
                </div>
                <div className="col-11">
                  <a href="#">
                    Lecture
                  </a>

                  <i className="fa fa-times float-end" aria-hidden="true"></i>
                  <br />
                  CS4550.12631.202410<br />
                  Sep 11 at 11:45am
                </div>

              </div>
              <div className="row mb-3">
                <div className="col-1">
                  <i className="fa fa-calendar-o d-flex justify-content-center" aria-hidden="true"></i>
                </div>
                <div className="col-11">

                  <a href="#">
                    CS5610 06 Sp23 Lecture
                  </a>

                  <i className="fa fa-times" aria-hidden="true" style={{ "float": "right" }}></i>
                  <br />
                  CS4550.12631.202410<br />
                  Sep 11 at 11:45am
                </div>

              </div>
              <div className="row mb-3">
                <div className="col-1">
                  <i className="fa fa-calendar-o d-flex justify-content-center" aria-hidden="true"></i>
                </div>
                <div className="col-11">
                  <a href="#">
                    CS5610 06 Sp23 Lecture
                  </a>
                  <i className="fa fa-times" aria-hidden="true" style={{ "float": "right" }}></i>
                  <br />
                  CS4550.12631.202410<br />
                  Sep 11 at 11:45am
                </div>
              </div>
              <div className="row">
                <a href="#">12 more in the next week</a>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default Courses;