import { Wrapper } from './Projects.styles';
import HumanImage from '../../assets/svg/projects-svg/human-talking.svg';
import Shape from '../../assets/svg/square-circle-shape.svg';
import DiscoverMore from '../../assets/svg/discover-more.svg';
/* import TopBarButtonsImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-button-elements2.svg';
import TopBarSquaresImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-square-elements.svg';
import TopBarMiddleImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-middle-element.svg'; */
import { Link, Route, Routes } from 'react-router-dom';
import CodingProjects from './codingProjects/CodingProjects';
import Hobbies from './hobbies/Hobbies';
import Courses from './courses/Courses';
import { useEffect, useState } from 'react';

const Projects = ({ theme }) => {
  /* TODO: clean unused .svg's */
  const [toggleBackground, setToggleBackground] = useState(true);

  const changeBackground = (val) => {
    val ? setToggleBackground(false) : setToggleBackground(true);
  };

  useEffect(() => {
    toggleBackground
      ? (document.body.style.background =
          'linear-gradient(to right,#15304B 0%,#15304B 60%,#ffffff 50%,#ffffff 100%)')
      : (document.body.style.background = '#15304B');

    return () => {
      document.body.style.background = '#15304B';
    };
  }, [toggleBackground]);

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
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </Wrapper>
  );
};
export default Projects;
