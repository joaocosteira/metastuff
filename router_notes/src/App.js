import { useState } from 'react'

import { notes as initialNotes } from './data/notes';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom"


import Home from './components/Home';
import Note from './components/Note';
import Notes from './components/Notes';
import Users from './components/Users';
import Login from './components/Login';


const App = () => {

  const [notes, setNotes] = useState(initialNotes)
  const [user, setUser] = useState(null)

  const login = (user) => {
    setUser(user)
  }

  const padding = {
    padding: 5
  }

  return (
    <div>
      <Router>
        <div>
          <Link style={padding} to="/">home</Link>
          <Link style={padding} to="/notes">notes</Link>
          <Link style={padding} to="/users">users</Link>
          {user
            ? <em>{user} logged in</em>
            : <Link style={padding} to="/login">login</Link>
          }
        </div>

        <Routes>
          <Route path="/notes/:id" element={<Note notes={notes} />} />
          <Route path="/notes" element={<Notes notes={notes} />} />
          <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2023</em>
      </div>
    </div>
  )
}

export default App;
