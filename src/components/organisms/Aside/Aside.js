import { Link, useLocation } from 'react-router-dom';
import { Wrapper } from './Aside.styles';

const Aside = () => {
  const location = useLocation().pathname;
  return (
    <Wrapper location={location}>
      <ul>
        <Link to="/">
          <li className={location === '/' ? 'aside-line active' : 'aside-line'}>
            home
          </li>
        </Link>
        <Link to="/about">
          <li
            className={
              location === '/about' ? 'aside-line active' : 'aside-line'
            }
          >
            about
          </li>
        </Link>
        <Link to="/projects">
          <li
            className={
              location === '/projects' ||
              location === '/projects/coding' ||
              location === '/projects/hobbies' ||
              location === '/projects/courses'
                ? 'aside-line active'
                : 'aside-line'
            }
          >
            projects
          </li>
        </Link>
        <Link to="/contact">
          <li
            className={
              location === '/contact' ? 'aside-line active' : 'aside-line'
            }
          >
            contact
          </li>
        </Link>
      </ul>
    </Wrapper>
  );
};
export default Aside;
