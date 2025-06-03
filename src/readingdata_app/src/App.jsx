import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './data.json'
import CountryInfo from './components/CountryInfo';


const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
  { id: 3, name: "Alice Smith", email: "alice@example.com" },
  { id: 4, name: "Bob Johnson", email: "bob@example.com" },
  { id: 5, name: "Charlie Brown", email: "charlie@example.com" }
];

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json') // Caminho relativo ao diretório public
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <CountryInfo />
      <div>
        <h1>Users List (Usando Const)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Users List (Usando Import Direto)</h1>
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>

      <div>
      <h1>Users List (Usando Fetch)</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
