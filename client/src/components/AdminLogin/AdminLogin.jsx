import React, { useState } from "react";
import AdminSvg from "../../Images/Admin.svg";
import "./AdminLogin.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
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

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const submitSignin = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      props.snackBar("Invalid email", "error");
      return;
    } else if (!(password.length > 3 && password.length < 10)) {
      if (password.length < 3)
        props.snackBar("Password should have atleast 3 characters!", "error");
      else
        props.snackBar("Password should have atmost 10 characters!", "error");
      return;
    } else {
      const url = "http://localhost:5000/admin/login";
      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.status === 200) {
        let data = await res.json();
        console.log(data);
        props.snackBar("Logged in successfully!", "success");
      } else if (res.status === 404) props.snackBar("user not found", "info");
      else if (res.status === 401)
        props.snackBar("Incorrect password", "error");
      else
        props.snackBar(
          "Something wrong in the server or User not found",
          "error"
        );
    }
  };

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
                <Button className={classes.btn}>Search</Button>
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
      <div
        className="container-fluid Admin-login-panel"
        style={{ marginTop: "140px" }}
      >
        <div className="d-flex align-items-center justify-content-center login-flex">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="img-container">
              <img src={AdminSvg} className="img-fluid" alt="login-banner" />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center flex-column login-flex-col">
            <form className="sign-in-form" onSubmit={submitSignin}>
              <h2 className="title">Admin Login</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field mb-4">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <div className={classes.root}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={submitSignin}
                >
                  LOGIN
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLogin;
