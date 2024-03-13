import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) =>
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) =>
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules rounded-0">
        <li className="list-group-item">
          <button className="btn btn-success"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button className="btn btn-warning"
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />
          <textarea className="form-control"
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            } />
        </li>

        {moduleList.filter((module) => module.course === courseId).map((module) => (
          <li
            className="list-group-item p-0 rounded-0"
            onClick={() => setSelectedModule(module)}>
            <div>

              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button  className="btn btn-warning"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button className="btn btn-danger"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group rounded-0">
                {module.lessons?.map((lesson: any) => (
                  <li className="list-group-item rounded-0">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;