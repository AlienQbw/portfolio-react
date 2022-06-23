import { useEffect, useState } from 'react';

const useCheckIfMobile = (maxWidth, maxHeight) => {
  const [isMobile, setIsMobile] = useState();
  let mH = maxHeight ? maxHeight : 450;
  let mW = maxWidth ? maxWidth : 1000;

  function updateWindowDimensions() {
    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;
    windowHeight <= mH || windowWidth <= mW
      ? setIsMobile(true)
      : setIsMobile(false);
  }

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener('resize', () => updateWindowDimensions());
    return () => {
      window.removeEventListener('resize', () => updateWindowDimensions());
      updateWindowDimensions();
    };
  }, []);

  return isMobile;
};
export default useCheckIfMobile;
