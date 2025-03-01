import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "././redux/contactsOps";
import ContactList from "./components/contactList/ContactList.jsx"
import ContactForm from "./components/contactForm/ContactForm.jsx";
import SearchBox from "./components/searchBox/SearchBox.jsx";
import s from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.app}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
