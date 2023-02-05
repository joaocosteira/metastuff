/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './App.css';

import Home from './components/Home';
import Users from './components/Users';
import Notes from './components/Notes';


const padding = { padding: 5 }

function App() {


  const [page,setPage] = useState('home');


  const toPage = page => e => {
    e.preventDefault();
    setPage(page);
  }

  const content = () => {

    switch(page){
      case 'home':
        return <Home/>
      case 'users':
        return <Users/>
      case 'notes':
        return <Notes/>
      default:
        return <Home/>
    }
  }
  return (
    <div className="App">
      <div>
        <a href="" onClick={toPage('home')} style={padding}>Home</a>
        <a href="" onClick={toPage('users')} style={padding}>Users</a>
        <a href="" onClick={toPage('notes')} style={padding}>Notes</a>
      </div>
      {content()}
    </div>
  );
}

export default App;
