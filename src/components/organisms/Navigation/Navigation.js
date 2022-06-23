import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Wrapper } from './Navigation.styles';
import githubIcon from '../../../assets/resources/icons/GitHub.png';
import linkedinIcon from '../../../assets/resources/icons/linkedIn.png';

const Navigation = () => {
  const [overlayActive, setOverlayActive] = useState(false);
  const toggleOverlay = () => {
    !overlayActive
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'visible');
    setOverlayActive(!overlayActive);
  };
  const overlayOff = () => {
    document.body.style.overflowY = 'visible';
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
          <div className="nav-icon-links-container">
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
      </div>
    </Wrapper>
  );
};
export default Navigation;
