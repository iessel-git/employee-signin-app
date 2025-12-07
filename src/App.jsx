import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignInPage from './pages/SignInPage';
import SignOutPage from './pages/SignOutPage';
import AdminPage from './pages/AdminPage';


function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/sign-in" element={<SignInPage />} />
<Route path="/sign-out" element={<SignOutPage />} />
<Route path="/admin" element={<AdminPage />} />
</Routes>
</BrowserRouter>
);
}


export default App;
