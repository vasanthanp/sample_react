import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import AdminSigninPage from "./pages/AdminSigninPage/AdminSigninPage";
import AttackerSigninPage from "./pages/AttackerSigninPage/AttackerSigninPage";
//sample
const App = () => {
  return (
    <BrowserRouter>
      <NavBarComponent />
      <AdminSigninPage />
      <AttackerSigninPage />
    </BrowserRouter>
  );
};
export default App;
