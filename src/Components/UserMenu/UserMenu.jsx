import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/auth-actions";
import { getUserEmail } from "../../redux/auth/auth-selectors";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(getUserEmail);
  return (
    <div>
      <p>{email}</p>
      <button onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  );
}
