import React from "react";
import "./AdminHome.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AdminHome = () => {
  let color = "#xxxxxx".replace(/x/g, (y) =>
    ((Math.random() * 16) | 0).toString(16)
  );
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Malicious Finder says"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            It is not necessary to log the users out of this session layer, but
            you can force the logout. Are you sure want to Logout :)
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            <ClearIcon />
            No,Didn't
          </Button>
          <Button onClick={handleClose} color="primary">
            <DoneIcon />
            Yes,I want
          </Button>
        </DialogActions>
      </Dialog>
      <div className="container-fluid">
        <div className="d-flex">
          <div className="admin-panel mr-auto mt-4 ml-2">
            <h3>ADMIN PANEL</h3>
          </div>
          <ul
            className="nav nav-pills mb-3 mt-3 mr-2"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active mr-3"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                ADD URL
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link mr-3"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                VIEW URL
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link mr-3"
                href="#pills-logout"
                aria-controls="pills-contact"
              >
                <ExitToAppIcon onClick={handleClickOpen} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container" style={{ height: "100vh" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="tab-content"
            id="pills-tabContent"
            style={{ marginTop: "50px" }}
          >
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="d-flex align-items-center justify-content-center">
                <div className="d-flex flex-column mr-3">
                  <div className="input-field">
                    <i className="fas fa-globe"></i>
                    <input type="text" placeholder="Add url" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-tag"></i>
                    <input type="text" placeholder="Add tag" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Harmed by" />
                  </div>
                </div>
                <button
                  className="btn-hover color-9"
                  style={{ marginTop: "13px" }}
                >
                  ADD DETAILS
                </button>
              </div>
              <div className="d-flex flex-column mt-3">
                <div
                  className="content-view mt-1 "
                  // style={{ border: `1px solid ${color}` }}
                >
                  <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
                    <div className="para-span mr-auto pr-5">
                      <span
                        className="tag mr-3"
                        // style={{ background: `${color}` }}
                      >
                        JAVA TAG
                      </span>
                      <span>
                        https://petstore.swagger.io/?_ga=2.174142754.1253318419.1623030429-1242764364.1622510545
                      </span>
                    </div>
                    <div className="edit-content d-flex">
                      <div className="mr-2">
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                      </div>
                      <div className="">
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-view mt-1 ">
                  <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
                    <div className="para-span mr-auto pr-5">
                      <span className="tag mr-3">JAVA TAG</span>
                      <span>
                        https://petstore.swagger.io/?_ga=2.174142754.1253318419.1623030429-1242764364.1622510545
                      </span>
                    </div>
                    <div className="edit-content d-flex">
                      <div className="mr-2">
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                      </div>
                      <div className="">
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="d-flex flex-column mt-4">
                <div
                  className="content-view mt-1 "
                  // style={{ border: `1px solid ${color}` }}
                >
                  <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
                    <div className="para-span mr-auto pr-5">
                      <span
                        className="tag mr-3"
                        // style={{ background: `${color}` }}
                      >
                        JAVA TAG
                      </span>
                      <span>
                        https://petstore.swagger.io/?_ga=2.174142754.1253318419.1623030429-1242764364.1622510545
                      </span>
                    </div>
                    <div className="edit-content d-flex">
                      <div className="mr-2">
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                      </div>
                      <div className="">
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                
                </div>
                <div className="content-view mt-1 ">
                  <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
                    <div className="para-span mr-auto pr-5">
                      <span className="tag mr-3">JAVA TAG</span>
                      <span>
                        https://petstore.swagger.io/?_ga=2.174142754.1253318419.1623030429-1242764364.1622510545
                      </span>
                    </div>
                    <div className="edit-content d-flex">
                      <div className="mr-2">
                        <IconButton edge="end" aria-label="delete">
                          <EditIcon />
                        </IconButton>
                      </div>
                      <div className="">
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminHome;
