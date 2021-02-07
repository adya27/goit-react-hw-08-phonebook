import React from "react";
import {
  useForm,
  // Controller
} from "react-hook-form";
// import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { login } from "../../redux/auth/auth-actions";

import styles from "./LoginForm.module.css";

function LoginForm({ dispatchContact }) {
  const {
    register,
    handleSubmit,
    // watch,
    errors,
    // control,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    dispatchContact(data);

    reset({ tel: "" });
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h3>Welcome to Login!</h3>
      <form className={styles.form} id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="e-mail"
          name="email"
          ref={register({
            required: true,
            pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i,
          })}
        />
        {errors.email && <span>This email field is required</span>}

        <input
          type="password"
          className={styles.input}
          placeholder="password"
          name="password"
          ref={register({ required: true, min: 5, max: 10 })}
        />

        {errors.password && (
          <span>
            This password field is required. Password must contain 5-10 symbols
          </span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  dispatchContact: login,
};

export default connect(null, mapDispatchToProps)(LoginForm);
