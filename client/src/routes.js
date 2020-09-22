import React from "react"
import {Route, Switch, Redirect} from "react-router-dom";
import {DashboardPage} from "./pages/dashboardPage";
import {AuthPage} from "./pages/AuthPage/AuthPage";

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/" exact>
          <DashboardPage/>
        </Route>
        <Redirect to="/"/>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}
