import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/macaque">macaque</Link>
      </li>
      <li>
        <Link to="/babouin">babouin</Link>
      </li>
    </ul>
  </nav>
);

export default Header;
