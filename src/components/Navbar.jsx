import { NavLink } from 'react-router-dom';
import profil from './icons/profile.png';

const Navbar = () => {
  const links = [
    { path: '/', text: 'BOOKS' },
    { path: 'categories', text: 'CATEGORIES' },
  ];

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Bookstore CMS</h1>
      <ul className="nav-links">
        {links.map((item) => (
          <li key={item.text} className="nav-link">
            <NavLink className="nav-link" to={item.path}>
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="nav-btn"
      >
        <img src={profil} alt="icon" className="person" />
      </button>
    </nav>
  );
};

export default Navbar;
