import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Notes from './Notes';
import Users from './Users';

const App = ()  => {

    return(
        <Routes>
            <Route path="/notes" element={<Notes />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default App;