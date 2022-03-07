import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import AppBar from "../components/AppBar/app-bar";
import Login from "../scenes/Login";
import { OrdersList } from "../scenes/OrdersList";
import { DeliveriesList } from "../scenes/DeliveriesList";
import { Spinner } from "../components/Spinner/spinner";

function Routes() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [AppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAppLoading(false);
    }, 2000);
  }, []);

  if (AppLoading) {
    return <Spinner size="3rem" />;
  }

  return (
    <>
      {!isLoggedIn && (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      )}
      {isLoggedIn && (
        <>
          <AppBar />
          <Switch>
            <Route exact path="/deliverieslist" component={DeliveriesList} />
            <Route exact path="/orders" component={OrdersList} />
            {/* <Route exact path="/">
              <Redirect to={"/orders"} />
            </Route> */}
            <Route path="*">
              <Redirect to={"/orders"} />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default Routes;
