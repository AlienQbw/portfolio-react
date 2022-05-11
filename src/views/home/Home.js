import { Wrapper } from './Home.styles';
import HomeImage from '../../assets/svg/home-image.svg';
import { useEffect, useRef, useState } from 'react';
const Home = () => {
  const intervalRef = useRef();
  const titleText = 'Frontend Developer';
  const [title, setTitle] = useState('F');
  if (title.length === titleText.length) {
    clearInterval(intervalRef.current);
  }
  useEffect(() => {
    intervalRef.current = setInterval(
      () => setTitle((title) => title + titleText[title.length]),
      75
    );

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
