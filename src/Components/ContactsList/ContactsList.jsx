import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import styles from "./ContactsList.module.css";
import Card from "../Card/Card";
import { fetchContacts } from "../../redux/phonebook/actions";

function ContactsList(/*{ firstFetch }*/) {
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // useEffect(() => {
  //   firstFetch();
  // }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact?.name.toLowerCase().includes(filter)
  );

  return (
    <div styles={styles.container}>
      <h3>Contacts list</h3>
      <ul className={styles.container}>
        {filteredContacts.map((contact) => (
          <Card key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}

// const mapDispatchToProps = {
//   firstFetch: fetchContacts,
// };

// export default connect(null, mapDispatchToProps)(ContactsList);
export default ContactsList;
