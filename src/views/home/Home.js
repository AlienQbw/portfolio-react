import { Wrapper } from './Home.styles';
import HomeImage from '../../assets/svg/home-image.svg';
const Home = () => {
  return (
    <Wrapper>
      <div className="name">
        <div>
          <h1>BARTOSZ</h1>
          <h1>WŁADYKA</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
      <div className="home-svg">
        <img src={HomeImage} alt="" />
      </div>
    </Wrapper>
  );
};
export default Home;
