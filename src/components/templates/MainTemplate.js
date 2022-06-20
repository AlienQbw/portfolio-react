import Aside from 'components/organisms/Aside/Aside';
import { useState } from 'react';
import { useEffect } from 'react';
import Navigation from '../organisms/Navigation/Navigation';
import Wrapper from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  function updateWindowDimensions() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    windowHeight < 450 || windowWidth < 1000
      ? setIsMobile(true)
      : setIsMobile(false);
    console.log(windowHeight, windowWidth);
  }

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', () => updateWindowDimensions());
    return () => {
      window.removeEventListener('resize', () => updateWindowDimensions());
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Navigation />
        {isMobile ? '' : <Aside />}
        {children}
      </Wrapper>
    </>
  );
};
export default MainTemplate;
