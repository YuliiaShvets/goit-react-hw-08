import { useSelector } from "react-redux";
import { selectLoading, selectError } from "../../redux/contacts/selectors.js";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";
import Contact from "../contact/Contact.jsx";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul className={s.contact}>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

