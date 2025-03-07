import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../../components/contactForm/ContactForm.jsx";
import ContactList from "../../components/contactList/ContactList.jsx";
import SearchBox from "../../components/searchBox/SearchBox.jsx";
import s from "./ContactsPage.module.css";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { selectLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <div className={s.contactWrapper}>
      <h2 className={s.contactTitle}>Contacts</h2>
      <ContactForm />
      {isLoading && <p>Loading...</p>}
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
