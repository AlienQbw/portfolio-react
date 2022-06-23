import { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Wrapper } from './Projects.styles';
import HumanImage from '../../assets/svg/projects-svg/human-talking.svg';
import Shape from '../../assets/svg/square-circle-shape.svg';
import DiscoverMore from '../../assets/svg/discover-more.svg';
import CodingProjects from './codingProjects/CodingProjects';
import Hobbies from './hobbies/Hobbies';
import Courses from './courses/Courses';
import useCheckIfMobile from 'hooks/useCheckIfMobile';

const Projects = () => {
  /* TODO: clean unused .svg's */
  const isMobile = useCheckIfMobile();

  const [gradientBackground, setgradientBackground] = useState(true);

  const changeBackground = (val) => {
    val ? setgradientBackground(true) : setgradientBackground(false);
  };
  useEffect(() => {
    isMobile ? changeBackground(false) : changeBackground(true);
  }, [isMobile]);

  useEffect(() => {
    gradientBackground
      ? (document.body.style.background =
          'linear-gradient(to right,#15304B 0%,#15304B 60%,#ffffff 50%,#ffffff 100%)')
      : (document.body.style.background = '#15304B');

    return () => {
      document.body.style.background = '#15304B';
    };
  }, [gradientBackground]);

  return (
    <Wrapper>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <img className="human-image" src={HumanImage} alt="" />
              <img className="shape-image" src={Shape} alt="" />
              <div className="shape-background"></div>

              <div className="links-containers">
                <img className="discover-image" src={DiscoverMore} alt="" />
                <div className="link-container">
                  <Link to="/projects/courses">
                    <h2>Courses</h2>
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/projects/coding">
                    <h2>Coding Projects</h2>
                  </Link>
                </div>
                <div className="link-container">
                  <Link to="/projects/hobbies">
                    <h2>Off-topic stuff</h2>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/coding"
          element={<CodingProjects changeBackground={changeBackground} />}
        />
        <Route
          path="/courses"
          element={<Courses changeBackground={changeBackground} />}
        />
        <Route
          path="/hobbies"
          element={<Hobbies changeBackground={changeBackground} />}
        />
      </Routes>
    </Wrapper>
  );
};
export default Projects;
