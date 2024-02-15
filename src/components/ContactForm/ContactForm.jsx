import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addContact, selectItems } from '../../redux';
import css from './ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const handleAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const newContact = {
      name: form.elements.name.value,
      phone: form.elements.number.value,
    };
    const isDuplicate = items.some(
      contact =>
        contact.name.toLowerCase() === newContact.name.trim().toLowerCase()
    );
    if (isDuplicate) {
      toast.warn(`${newContact.name} is already in contacts`);
      return;
    }
    dispatch(addContact(newContact));
    form.reset();
  };

  const {
    phonebookBox,
    phonebookForm,
    phoneBookInput,
    phoneBookSubmitBtn,
    formLabel,
    phoneBookInputNumber,
  } = css;

  return (
    <div className={phonebookBox}>
      <form className={phonebookForm} onSubmit={handleAddContact}>
        <div>
          <label htmlFor="name" className={formLabel}>
            Name
            <input
              id="name"
              type="text"
              name="name"
              className={phoneBookInput}
              placeholder="Name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces (for example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan)"
              aria-label="Name"
              required
              autoFocus
            />
          </label>
        </div>
        <div>
          <label htmlFor="number" className={formLabel}>
            Number
            <input
              id="number"
              type="tel"
              name="number"
              className={phoneBookInputNumber}
              placeholder="123-45-67"
              pattern="\d{3}[\-]\d{2}[\-]\d{2}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + (for example: 123-45-67)"
              aria-label="Phone number"
              required
            />
          </label>
          <button type="submit" className={phoneBookSubmitBtn}>
            Add contact
          </button>
        </div>
      </form>
    </div>
  );
}
