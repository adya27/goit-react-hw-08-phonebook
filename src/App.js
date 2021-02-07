import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Switch } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import PhoneBook from "./Views/PhoneBook;";
import Registration from "./Views/Registration";
import Login from "./Views/Login";
import { fetchCurrentUser } from "./redux/auth/auth-actions";
import UserMenu from "./Components/UserMenu/UserMenu";
import { getIsLoggedIn, getIsRefreshing } from "./redux/auth/auth-selectors";
import PrivateRoute from "./Components/PrivatRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";
// import { ListGroup } from "react-bootstrap";
import Navigation from "./Components/Navigation/Navigation";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        {/* {!isLoggedIn && <Navigation />} */}

        {isLoggedIn && <UserMenu />}

        <Switch>
          <PrivateRoute path="/phoneBook">
            <PhoneBook />
          </PrivateRoute>

          <PublicRoute path="/login" restricted>
            <Navigation />
            <Login />
          </PublicRoute>

          <PublicRoute path="/" restricted>
            <Navigation />
            <Registration />
          </PublicRoute>
        </Switch>
      </>
    )
  );
}

export default App;
