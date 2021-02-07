import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import PhoneBook from "./Views/PhoneBook;";
import Registration from "./Views/Registration";
import Login from "./Views/Login";
import { fetchCurrentUser } from "./redux/auth/auth-actions";
import UserMenu from "./Components/UserMenu/UserMenu";
import { getIsLoggedIn } from "./redux/auth/auth-selectors";
import PrivateRoute from "./Components/PrivatRoute/PrivateRoute";
import PublicRoute from "./Components/PublicRoute/PublicRoute";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Registration</Link>
          </li>
          <li>
            <Link to="/phoneBook">Phonebook</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>

      {isLoggedIn && <UserMenu />}

      <Switch>
        <PrivateRoute path="/phoneBook">
          <PhoneBook />
        </PrivateRoute>

        <PublicRoute path="/login" restricted>
          <Login />
        </PublicRoute>

        <PublicRoute path="/" restricted>
          <Registration />
        </PublicRoute>
      </Switch>
    </>
  );
}

export default App;
