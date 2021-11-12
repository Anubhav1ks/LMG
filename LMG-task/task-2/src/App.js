 // eslint-disable-next-line
import React,{useState} from 'react';

import './App.css';
import Navbar from "./Components/Navbar";
import CardSection from "./Components/CardSection";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <Navbar setUsers={setUsers} setLoading={setLoading}/>
      <CardSection users={users} loading={loading}/>
    </div>
  );
}

export default App;
