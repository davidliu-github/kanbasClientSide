import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="flex-fill">
        {/*Copy Main Content Here 3333*/}
        <div className="container-fluid pe-4">
          <div className="row">
            <div className="col-3">
              <input placeholder="Search for Assignment" style={{ "height": "40px", "width": "100%" }} />
            </div>
            <div className="col-1 col-md-5">
            </div>
            <div className="col-4 text-end float-end">
              <div className="btn right">
                + Group
              </div>
              <div className="btn right" style={{ "backgroundColor": "red", "color": "white", "borderWidth": "1px" }}>
                + Assignments
              </div>
              <div className="btn right">
                <i className="fa fa-ellipsis-v"></i>
              </div>
            </div>
          </div>

          <hr />
          <div>
            <ul className="list-group wd-modules" style={{ "width": "100%" }}>
              <li className="list-group-item p-0 rounded-0">
                <div>
                  <FaEllipsisV className="me-2" /> ASSIGNMENTS
                  <span className="float-end">
                    <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                  </span>
                </div>
                <ul className="list-group rounded-0">
                  {assignmentList.map((assignment) => (
                    <li className="list-group-item rounded-0">

                      <div className="ig-row">
                        <span><FaEllipsisV className="me-3" /></span>
                        <span><FaPenSquare className="me-3" style={{ "color": "green" }} /></span>
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                          <b style={{"color" : "black"}}>{assignment._id} - {assignment.title}</b><br />Multiple Modules <text style={{"color" : "black"}}>| { assignment.available ? <b>Due</b> : <b>Not available until</b>} Sep 18 at 11:59pm | 100 pts</text>
                        </Link>
                        <span className="right">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" /></span>
                      </div>

                    </li>))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Assignments;