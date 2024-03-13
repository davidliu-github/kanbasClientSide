import "./index.css"

function Status() {
  return (
    <div className="flex-fill">
      <div className="flex-grow-0 me-2 d-none d-xl-block right-pane" style={{ "width": "270px" }}>
        <div className="container-fluid right-pane">
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

  );
}
export default Status;