import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import AttackerLogin from "./components/AttackerLogin/AttackerLogin";
import Home from "./components/Home/Home";
import "./App.css";
import { Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import AdminHome from "./components/AdminHome/AdminHome";
import AttackerHome from "./components/AttackerHome/AttackerHome";

const App = () => {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };
  const snackBar = (snackMessage, messType) => {
    setSeverity(messType);
    setMessage(snackMessage);
    setOpen(true);
  };
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  return (
    <BrowserRouter>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
      <Switch>
        <Route exact path="/">
          <Home snackBar={snackBar} />
        </Route>
        <Route path="/login/admin">
          <AdminLogin snackBar={snackBar} />
        </Route>
        <Route path="/login/attacker">
          <AttackerLogin snackBar={snackBar} />
        </Route>
        <Route path="/adminHome">
          <AdminHome snackBar={snackBar} />
        </Route>
        <Route path="/attackerHome">
          <AttackerHome snackBar={snackBar} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
