import {
  Container,
  PhonebookTitle,
  ContactForm,
  Filter,
  ContactList,
  ContactsTitle,
} from 'components';

const ContactsPage = () => {
  return (
    <Container>
      <div
        style={{
          width: '50%',
          paddingTop: 30,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}
      >
        <PhonebookTitle />
        <ContactForm />
      </div>

      <div
        style={{
          width: '50%',
        }}
      >
        <ContactsTitle />
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default ContactsPage;
