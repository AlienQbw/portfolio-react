import { Link } from 'react-router-dom';
import { Wrapper } from './Navigation.styles';
import githubIcon from '../../../assets/resources/icons/GitHub.png';
import linkedinIcon from '../../../assets/resources/icons/linkedIn.png';
import { useState } from 'react';

const Navigation = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };
  const overlayOff = () => {
    setOverlayActive(false);
  };
  return (
    <Wrapper overlayActive={overlayActive}>
      <button
        onClick={() => {
          toggleOverlay();
        }}
        className="hamburger"
      >
        <div className="hamburger-lines"></div>
      </button>
      <div className="navigation-container">
        <h3>
          <Link to="/">{'<bwladyka/>'}</Link>
        </h3>
        <div className="nav-links">
          <ul onClick={() => overlayOff()}>
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
          <a
            className="nav-icon-links"
            href="https://github.com/AlienQbw"
            target="_blank"
          >
            <img src={githubIcon} alt="" />
          </a>
          <a
            className="nav-icon-links"
            href="https://www.linkedin.com/in/bartosz-w%C5%82adyka-6a6a39204"
            target="_blank"
          >
            <img src={linkedinIcon} alt="" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navigation;
