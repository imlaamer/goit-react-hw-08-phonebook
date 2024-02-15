import {
  Container,
  PhonebookTitle,
  ContactForm,
  Filter,
  ContactList,
  ContactsTitle,
} from 'components';

function App() {
  return (
    <Container>
      <div style={{ width: '50%' }}>
        <PhonebookTitle />
        <ContactForm />
      </div>

      <div style={{ width: '50%' }}>
        <ContactsTitle />
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}

export default App;
