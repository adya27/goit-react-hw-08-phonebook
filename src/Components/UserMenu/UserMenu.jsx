import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";

import styles from "./UserMenu.module.css";
import { logout } from "../../redux/auth/auth-actions";
import { getUserEmail } from "../../redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <Container className={styles.horizontal}>
      <Card.Title className={styles.item}>{email}</Card.Title>
      <Button variant="outline-primary" onClick={() => dispatch(logout())}>
        Log Out
      </Button>
    </Container>
  );
}
