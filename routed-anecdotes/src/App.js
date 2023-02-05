import { useState } from 'react'
import About from './components/About'
import AnecdoteList from './components/AnecdoteList'
import CreateNew from './components/CreateNew'
import Menu from './components/Menu';
import Footer from './components/Footer';
import { anecdotes as initialAnecdotes } from './data/anecdotes';
import { Route, Routes, useMatch, useNavigate } from 'react-router-dom';
import Notification from './components/Notification';
import Anecdote from './components/Anecdote';



const App = () => {

  const match = useMatch('/anecdotes/:id')
  const navigate = useNavigate();

  const [anecdotes, setAnecdotes] = useState(initialAnecdotes);
  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    navigate('/');
    handleNotification(`Added ${anecdote.content}`);

  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))

    handleNotification(`You voted ${voted.content}`);
  }

  const handleNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(''),3000);

  }

  const anecdote = match 
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null;

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      <Notification notification={notification}/>
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />}/>
        <Route path="/anecdotes/:id" element={<Anecdote anecdote={anecdote} vote={vote}/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/create" element={<CreateNew addNew={addNew} sendNotification={handleNotification}/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
