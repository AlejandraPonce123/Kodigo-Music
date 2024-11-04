import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
      <Link to="/library" className={location.pathname === '/library' ? 'active' : ''}>Library</Link>
      <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>Login</Link>
    </nav>
  );
};

export default Navbar;
