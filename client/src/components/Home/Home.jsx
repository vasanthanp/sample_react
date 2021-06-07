import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import suspect from "../../Images/disguise.webp";
import danger from "../../Images/danger.png";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import "./Home.css";
import { IconButton } from "@material-ui/core";
const Home = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    btn: {
      color: "#fff",
    },
  }));
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              MALICIOUS WEBSITE FINDER
            </Typography>
            <div className="mr-2">
              <Link to="/">
                <Button
                  className={classes.btn}
                >
                  Search
                </Button>
              </Link>
            </div>
            <div className="mr-2">
              <Link to="/login/admin">
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.btn}
                >
                  Admin
                </Button>
              </Link>
            </div>
            <Link to="/login/attacker">
              <Button
                variant="outlined"
                color="secondary"
                className={classes.btn}
              >
                Attacker
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
      <div className="container" style={{ marginTop: "120px" }}>
        <div className="d-flex align-items-center justify-content-center">
          <div className="input-field mb-4">
            <i className="fas fa-globe"></i>
            <input type="text" placeholder="Check sites" />
          </div>
          <button
            class="btn-hover color-3"
            style={{ marginTop: "-4px" }}
            onClick={handleClickOpen}
          >
            SEARCH
          </button>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <div className="d-flex flex-column p-2">
              <div className="img-popop">
                <img src={suspect} alt="banner-popup" className="img-fluid" />
              </div>
              <div className="suspect-content d-flex align-items-center justify-content-center">
                <img
                  src={danger}
                  alt="danger-popup"
                  className="img-fluid mr-3"
                  height="65"
                  width="65"
                />
                <h3 style={{ fontWeight: "800" }} className="mt-2">
                  This is a Malicious Webpage
                </h3>
              </div>
            </div>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <p style={{ color: "#000" }}>
                  Your are trying to access :
                  <span
                    style={{ color: "red", fontWeight: "600" }}
                    className="ml-2 mr-2"
                  >
                    https://www.youtube.com/
                  </span>
                  is Malicious Webpage is detected from Admin
                </p>
              </DialogContentText>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="container mt-4">
        <div
          className="content-views mt-1 "
          // style={{ border: `1px solid ${color}` }}
        >
          <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
            <div className="para-span mr-auto pr-5">
              <span
                className="tags mr-3"
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
        <div
          className="content-view mt-3 "
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

        <div
          className="content-views mt-3"
          // style={{ border: `1px solid ${color}` }}
        >
          <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
            <div className="para-span mr-auto pr-5">
              <span
                className="tags mr-3"
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
        <div
          className="content-view mt-3 "
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

        <div
          className="content-views mt-3"
          // style={{ border: `1px solid ${color}` }}
        >
          <div className="content-table d-flex align-items-center justify-content-center pr-3 pl-3">
            <div className="para-span mr-auto pr-5">
              <span
                className="tags mr-3"
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
        <div
          className="content-view mt-3"
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
      </div>
    </React.Fragment>
  );
};

export default Home;
