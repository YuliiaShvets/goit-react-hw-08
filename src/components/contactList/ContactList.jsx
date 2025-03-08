import { useDispatch, useSelector } from "react-redux";
import s from "./ContactList.module.css";
import Contact from "../../components/Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contact}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(({ id, name, number }) => (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            onDelete={() => dispatch(deleteContact(id))}
          />
        ))
      ) : (
        <p className={s.message}>Contacts not found</p>
      )}
    </ul>
  );
};

export default ContactList;

