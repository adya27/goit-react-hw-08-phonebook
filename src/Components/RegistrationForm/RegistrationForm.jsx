import React from "react";
import {
  useForm,
  // Controller
} from "react-hook-form";
// import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { register } from "../../redux/auth/auth-actions";

import styles from "./RegistrationForm.module.css";

function RegistrationForm({ dispatchRegister }) {
  const {
    register,
    handleSubmit,
    watch,
    errors,
    // control,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data, e) => {
    dispatchRegister(data);

    reset({ tel: "" });
    e.target.reset();
  };

  return (
    <div className={styles.container}>
      <h3>Welcome to registration!</h3>
      <form className={styles.form} id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="login"
          name="name"
          ref={register({
            required: true,
            pattern: /[a-zA-Z0-9]/i,
          })}
        />
        {errors.name && (
          <span>
            The login field is required and mustn't contain spaces, matches all
            lowercase, uppercase letters and numbers
          </span>
        )}

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
          ref={register({ required: true, min: 7, max: 10 })}
        />

        {errors.password && (
          <span>
            This password field is required. Password must contain 7-10 symbols
          </span>
        )}

        {/* <input
          type="password"
          className={styles.input}
          placeholder="confirm password"
          name="passwordConfirm"
          ref={register({ required: true, min: 5, max: 10 })}
        />

        {errors.passwordConfirm && (
          <span>This passwordConfirm field is required</span>
        )}

        {watch("password") !== watch("passwordConfirm") && (
          <span>The passwords don't match</span>
        )} */}

        <input
          type="submit"
          className="btn btn-outline-primary"
          disabled={
            watch("password") === "" ||
            watch("name") === "" ||
            watch("email") === ""
          }
        />
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  dispatchRegister: register,
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
