import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './Login/Login';
import Dashboard from './Dashbord/Dashboard';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from '../src/contexts/ConversationsProvider';

function App() {

  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  )



  return (
    id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
