import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPenSquare, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
      <div className="flex-fill">
        {/*Copy Main Content Here 3333*/}
        <div className="container-fluid pe-4">
          <div className="row d-flex">
            <div className="d-flex justify-content-start">
              <input placeholder="Search for Assignment" style={{ "height": "40px" }} />
            </div>
            <div className="d-flex justify-content-end">
              <button type="button">
                + Group
              </button>
              <button type="button" style={{ "backgroundColor": "red", "color": "white", "borderWidth": "1px" }}>
                + Assignments
              </button>
              <button type="button">
                <i className="fa fa-ellipsis-v"></i>
              </button>
            </div>
          </div>

          <hr />
          <div>
            <ul className="list-group wd-modules" style={{ "width": "100vw" }}>
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
                      <FaEllipsisV className="me-2" />
                      <FaPenSquare className="me-2" style={{"color" : "green"}}/>
                      <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment._id} - {assignment.title}<br/>Multiple Modules | Due Sep 18 at 11:59pm | 100 pts</Link>
                      <span className="float-end">
                        <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
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