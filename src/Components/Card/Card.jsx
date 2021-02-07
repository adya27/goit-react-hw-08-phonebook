import Button from "react-bootstrap/Button";
import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/actions";

import styles from "./Card.module.css";

function Card({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handlerDeleteContact = () => dispatch(deleteContact(id));
  return (
    <li className={styles.container}>
      <ListGroup>
        <ListGroup.Item>{name}</ListGroup.Item>

        <ListGroup.Item>{number}</ListGroup.Item>
      </ListGroup>
      <Button
        className={styles.button}
        variant="outline-danger"
        type="button"
        onClick={handlerDeleteContact}
      >
        Delete
      </Button>
    </li>
  );
}

export default Card;
