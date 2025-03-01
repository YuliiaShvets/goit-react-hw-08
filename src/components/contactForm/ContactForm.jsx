import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import s from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.string().required("Required"),
  });

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
