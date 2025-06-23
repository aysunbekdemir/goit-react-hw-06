import ContactsForm from './components/ContactsForm/ContactsForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
      <h1>İletişim Kitabı</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
