import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { selectContacts } from "../../redux/contacts/slice.js";
import { addContact } from "../../redux/contacts/operations.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
  <Formik
initialValues={{ name: "", number: "" }}
validationSchema={validationSchema}
onSubmit={onSubmit}
>
{() => (
  <Form className={s.contactForm}>
    <div className={s.form}>
      <label className={s.labelContactForm} htmlFor="name">
        Name
      </label>
      <Field name="name" type="text" className={s.fieldContactForm} />
      <ErrorMessage name="name" component="div" className={s.error} />
    </div>
    <div className={s.form}>
      <label className={s.labelContactForm} htmlFor="number">
        Number
      </label>
      <Field name="number" type="text" className={s.fieldContactForm} />
      <ErrorMessage name="number" component="div" className={s.error} />
    </div>
    <div className={s.contactBtn}>
      <button type="submit" className={s.contactFormBtn}>
        Add Contact
      </button>
    </div>
  </Form>
)}
</Formik>
);
};

export default ContactForm;