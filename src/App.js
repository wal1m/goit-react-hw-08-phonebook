import Container from './components/Container/Container';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

function App() {
 
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter onChange={handleSearchChange} /> */}
      <Filter  />
      <ContactList />
      {/* <ContactList contacts={filtrContactList} onDelete={handleDeleteContact} /> */}
    </Container>
  );
}

export default App;
