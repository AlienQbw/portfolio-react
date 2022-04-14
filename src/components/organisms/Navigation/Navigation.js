import { Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <div>{'<bwladyka/>'}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <a href="google.com">GitHub</a>
      <a href="google.com">Linkedin</a>
    </Wrapper>
  );
};
export default Navigation;
