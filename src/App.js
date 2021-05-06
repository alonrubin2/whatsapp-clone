import React from 'react';
import './App.scss';
import useLocalStorage from './hooks/useLocalStorage';
import Login from './Login/Login';
import Dashboard from './Dashbord/Dashboard';

function App() {

  const [id, setId] = useLocalStorage('id');

  return (
     id ? <Dashboard id = { id } /> : <Login onIdSubmit={setId} />
  );
}

export default App;
