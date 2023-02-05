
import { Link } from 'react-router-dom';

const padding = { padding: 5 }

const Navbar = () => {

    return(
        <div>
            <Link style={padding} to="/">home</Link>
            <Link style={padding} to="/notes">notes</Link>
            <Link style={padding} to="/users">users</Link>
        </div>
    )
}

export default Navbar;