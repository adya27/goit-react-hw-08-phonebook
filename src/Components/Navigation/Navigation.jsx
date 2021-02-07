import React from "react";
import { ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ListGroup>
        <ListGroup.Item>
          <NavLink
            className={"btn-outline-primary"}
            activeClassName={"btn-outline-success"}
            to="/"
          >
            Registration
          </NavLink>
        </ListGroup.Item>
        {/* <li>
                <Link to="/phoneBook">Phonebook</Link>
              </li> */}
        <ListGroup.Item>
          <NavLink
            className={"btn-outline-primary"}
            activeClassName={"btn-outline-success"}
            to="/login"
          >
            Login
          </NavLink>
        </ListGroup.Item>
      </ListGroup>
    </nav>
  );
}
