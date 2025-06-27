import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Welkom</Link></li>
        <li><Link to="/praktijk">Praktijk</Link></li>
        <li><Link to="/theorievormen">Theorievormen</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;