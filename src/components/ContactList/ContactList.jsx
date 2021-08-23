import s from "./ContactList.module.css";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.contact}>
          <p>{name}</p>
          <p>{number}</p>
          <button
            className={s.contactDelete}
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            удалить
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
