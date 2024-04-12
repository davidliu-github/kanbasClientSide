import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
import { KanbasState } from "../../store";
function ModuleList() {

  const handleAddModule = () => {
    client.createModule(module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    console.log(moduleId);
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  const { courseId, courseShortId } = useParams();

  useEffect(() => {
    client.findModulesForCourse(courseShortId)
      .then((modules) =>{dispatch(setModules(modules));
        console.log("modules" + modules);
         });
    
  }, [courseShortId]);

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
            onClick={handleAddModule}>
            Add
          </button>
          <button className="btn btn-warning"
            onClick={handleUpdateModule}>
            Update
          </button>
          <input className="form-control"
            value={module.id}
            onChange={(e) =>
              dispatch(setModule({ ...module, id: e.target.value }))
            } />
          <textarea className="form-control"
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            } />
        </li>

        {moduleList.filter((module) => module.course === courseShortId).map((module) => (
          <li
            className="list-group-item p-0 rounded-0"
            onClick={() => setSelectedModule(module)}>
            <div>

              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end"></span>
              <button  className="btn btn-warning btn-sm ms-4"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>

                <button className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteModule(module?._id)}>
                  Delete
                </button>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule && selectedModule?._id === module._id && (
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