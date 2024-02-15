import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from 'components';
import {
  fetchContacts,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux';
import css from './ContactList.module.css';

export function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { contactsBox, contactsList } = css;
  return (
    <>
      {isLoading && filteredContacts?.length === 0 && (
        <p>Loading your contacts...</p>
      )}

      {filteredContacts?.length !== 0 && (
        <div className={contactsBox}>
          {!isLoading ? (
            <ul className={contactsList}>
              {filteredContacts?.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
              ))}
            </ul>
          ) : (
            <p>Updating your contacts...</p>
          )}
        </div>
      )}

      {filteredContacts?.length === 0 && !isLoading && <p>No contacts</p>}
    </>
  );
}
