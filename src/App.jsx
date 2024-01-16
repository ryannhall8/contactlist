import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
//display cotact list
//if contact selected, display their information
  return (
    <>
      {selectedContactId ? (
        <SelectedContact setSelectedContactId = {setSelectedContactId} selectedContactId = {selectedContactId}/>
      ) : (
      <ContactList setSelectedContactId = {setSelectedContactId} selectedContactId = {selectedContactId}/>
      )}
    </>
  );
}

export default App
