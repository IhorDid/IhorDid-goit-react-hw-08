import { selectError, selectLoading } from "../../redux/contacts/selectors";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

const ContactsPage = () => {
  const [contact, setContact] = useState({ name: "", number: "" });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm contact={contact} setContact={setContact} />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error, please try again!</p>}
      <ContactList setContact={setContact} />
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactsPage;
