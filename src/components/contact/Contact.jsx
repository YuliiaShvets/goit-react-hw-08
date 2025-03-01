import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";
import s from "./Contact.module.css";
import { RiFileUserFill } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactList}>
      <div className={s.contact}>
      <span className={s.contactSpan}> <RiFileUserFill className={s.icon}/>
      {name} 
    </span>
    <span className={s.contactSpan}> <BsFillTelephoneFill className={s.icon}/>
      {number}
    </span>
      </div>
      <button className={s.contactBtn} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

export default Contact;
