import { Wrapper } from './Home.styles';
import HomeImage from '../../assets/svg/home-image.svg';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  /* TODO: learn how to use Navigate */
  const navigate = useNavigate();
  /* TODO: learn how to get current location.pathname of the entire application */
  const intervalRef = useRef();
  const titleText = 'Full-stack Developer';
  const [title, setTitle] = useState('F');
  if (title.length === titleText.length) {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setTitle((title) => title + titleText[title.length]),
      75
    );
    window.addEventListener('wheel', (e) => {
      e.deltaY < 0 ? console.log(`up`) : console.log(`down`);
    });
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Wrapper>
      <div className="name">
        <div>
          <h1>BARTOSZ</h1>
          <h1>WŁADYKA</h1>
          <h2>
            <span>{title}</span>
          </h2>
        </div>
      </div>
      <div className="home-svg">
        <img src={HomeImage} alt="" />
      </div>
    </Wrapper>
  );
};
export default Home;
