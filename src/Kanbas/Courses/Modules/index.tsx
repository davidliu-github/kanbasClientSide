import ModuleList from "./List";
import "./index.css"

function Modules() {
  return (
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
        <div>
          <h2>Modules</h2>
          <ModuleList />
        </div>
      </div>
    </div>

  );
}
export default Modules;