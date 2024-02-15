import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux';
import css from './ContactItem.module.css';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  const { contactsItem, contactsText, contactDeleteBtn } = css;
  return (
    <>
      <li className={contactsItem}>
        <p className={contactsText}>
          {contact.name} : {contact.phone}
        </p>
        <button
          type="button"
          className={contactDeleteBtn}
          onClick={handleDeleteContact}
        >
          Delete
        </button>
      </li>
    </>
  );
}
