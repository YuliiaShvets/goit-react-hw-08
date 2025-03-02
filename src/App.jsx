import { BrowserRouter as Routes, Route } from "react-router-dom";/*import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "././redux/contactsOps";
import ContactList from "./components/contactList/ContactList.jsx"
import ContactForm from "./components/contactForm/ContactForm.jsx";
import SearchBox from "./components/searchBox/SearchBox.jsx";
import s from "./App.module.css";*/
import Layout from "./Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import ContactsPage from "./pages/ContactsPage/ContactsPage.jsx";

const App = () => {
  return(
  <Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<HomePage/>} />
<Route path="loginPage" element={<LoginPage/>} />
<Route path="registrationPage" element={<RegistrationPage/>} />
<Route path="contactsPage" element={<ContactsPage/>} />
  </Route>
    </Routes>
  )
}
  /*const dispatch = useDispatch();

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
};*/

export default App;
