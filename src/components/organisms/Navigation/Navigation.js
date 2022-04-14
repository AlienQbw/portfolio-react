import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <h3>{'<bwladyka/>'}</h3>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
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
