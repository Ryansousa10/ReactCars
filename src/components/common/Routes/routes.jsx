import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "../../../pages/Login/index";
import Register from "../../../pages/Register/index";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/login" exact />
      <Route component={Register} path="/register" />
    </BrowserRouter>
  );
};

export default Routes;
