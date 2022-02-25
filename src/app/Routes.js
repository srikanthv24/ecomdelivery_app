import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import AppBar from "../components/AppBar/app-bar";
import Login from "../scenes/Login";
import { OrdersList } from "../scenes/OrdersList";
import { DeliveriesList } from "../scenes/DeliveriesList";

function Routes() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  console.log("isLoggedIn", isLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Switch>
          <Route exact path="/" component={Login} />
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      )}
      {isLoggedIn && (
        <>
          <AppBar />
          <Switch>
            <Route exact path="/deliverieslist" component={DeliveriesList} />
            <Route exact path="/orders" component={OrdersList} />
            <Route exact path="/">
            <Redirect to={"/deliverieslist"} />
          </Route>
          {/* <Route path="*">
            <Redirect to={"/"} />
          </Route> */}
          </Switch>
        </>
      )}
    </>
  );
}

export default Routes;
