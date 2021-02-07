import React from "react";
import { useForm, Controller } from "react-hook-form";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import { addContact } from "../../redux/phonebook/actions";

import styles from "./Form.module.css";

function Form({ dispatchContact }) {
  const {
    register,
    handleSubmit,
    // watch, errors,
    control,
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
      <h3>Contacts</h3>
      <form className={styles.form} id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="name"
          name="name"
          ref={register}
        />
        <Controller
          className={styles.input}
          as={
            <NumberFormat
              format="+38 (###) ###-##-##"
              allowEmptyFormatting
              mask="_"
              onChange={(e) => console.log("e On change", e)}
            />
          }
          name="number"
          control={control}
          rules={{ required: true }}
          defaultValue=""
        />

        {/* <input
          className={styles.input}
          placeholder="e-mail"
          name="email"
          ref={register}
        /> */}
        <input className="btn btn-outline-primary" type="submit" />
      </form>
    </div>
  );
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  dispatchContact: addContact,
};

export default connect(null, mapDispatchToProps)(Form);
