import { Link } from 'react-router-dom';


export default function Navbar() {
return (
<nav style={{ padding: '10px', background: '#f4f4f4', marginBottom: '20px' }}>
<Link to="/" style={{ marginRight: '15px' }}>Home</Link>
<Link to="/sign-in" style={{ marginRight: '15px' }}>Sign In</Link>
<Link to="/sign-out" style={{ marginRight: '15px' }}>Sign Out</Link>
<Link to="/admin">Admin</Link>
</nav>
);
}
