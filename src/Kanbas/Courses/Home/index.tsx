import Modules from "../Modules";
import Status from "./Status";
import "./index.css"

function Home() {
  return (
    <div className="flex-fill">
      {/*Copy Main Content Here 3333*/}
      <div className="container-fluid pe-4">
        <div className="d-flex flex-row">
          <div style={{"width" : "70vw"}}>
            <Modules/>
          </div>
          <Status />
        </div>
      </div>
    </div>

  );
}
export default Home;