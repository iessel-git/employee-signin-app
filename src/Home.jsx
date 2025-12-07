import { Link } from 'react-router-dom';


export default function Home() {
return (
<div style={{ padding: '20px' }}>
<h1>Employee Sign In System</h1>


<nav>
<ul>
<li><Link to="/sign-in">Sign In</Link></li>
<li><Link to="/sign-out">Sign Out</Link></li>
<li><Link to="/admin">Admin Dashboard</Link></li>
</ul>
</nav>
</div>
);
}
