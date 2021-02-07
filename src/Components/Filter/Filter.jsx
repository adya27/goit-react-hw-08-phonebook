import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import styles from "./Filter.module.css";
import { addFilter } from "../../redux/phonebook/actions";

function Filter({ handleChange }) {
  const { register } = useForm({
    mode: "onChange",
  });

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder="filter"
        name="filter"
        ref={register}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

const mapDispatchToProps = { handleChange: addFilter };

export default connect(null, mapDispatchToProps)(Filter);
