import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux';
import { toast } from 'react-toastify';
import css from './ContactItem.module.css';

export function ContactItem({ contact }) {
  const dispatch = useDispatch();
  const handleDeleteContact = () => {
    dispatch(deleteContact(contact.id))
      .unwrap(toast.success('Your contact were successfully deleted!'))
      .catch(() =>
        toast.error('Something went wrong. Please try again later!')
      );
  };
  const { contactsItem, contactsText, contactDeleteBtn } = css;
  return (
    <>
      <li className={contactsItem}>
        <p className={contactsText}>
          {contact.name} : {contact.number}
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
