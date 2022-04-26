import { Link } from 'react-router-dom';
import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <h3>{'<bwladyka/>'}</h3>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <a className="nav-icon-links" href="google.com">
          G
        </a>
        <a className="nav-icon-links" href="google.com">
          L
        </a>
      </div>
    </Wrapper>
  );
};
export default Navigation;
