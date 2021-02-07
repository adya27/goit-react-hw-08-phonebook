import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/phonebook/actions";

import styles from "./Card.module.css";

function Card({ contact }) {
  const { name, number, id } = contact;
  const dispatch = useDispatch();

  const handlerDeleteContact = () => dispatch(deleteContact(id));
  return (
    <li className={styles.container}>
      <ul>
        <li>{name}</li>

        <li>{number}</li>
      </ul>
      <button type="button" onClick={handlerDeleteContact}>
        Delete
      </button>
    </li>
  );
}

export default Card;
