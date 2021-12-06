import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
