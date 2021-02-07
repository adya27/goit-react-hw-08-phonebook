import ContactsList from "../Components/ContactsList/ContactsList";
import Filter from "../Components/Filter/Filter";
import Form from "../Components/Form/Form";
import UserMenu from "../Components/UserMenu/UserMenu";

function PhoneBook() {
  return (
    <>
      {/* <UserMenu /> */}
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
}

export default PhoneBook;
