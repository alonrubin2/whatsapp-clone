import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './Login/Login';
import Dashboard from './Dashbord/Dashboard';
import { ContactsProvider } from './contexts/ContactsProvider';

function App() {

  const [id, setId] = useLocalStorage('id');

  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id}/>
    </ContactsProvider>
  )

  

  return (
     id ? dashboard : <Login onIdSubmit={setId} />
  );
}

export default App;
