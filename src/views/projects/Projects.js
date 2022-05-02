import { Wrapper } from './Projects.styles';
import HumanImage from '../../assets/svg/projects-svg/human-talking.svg';
import TopBarButtonsImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-button-elements2.svg';
import TopBarSquaresImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-square-elements.svg';
import TopBarMiddleImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-middle-element.svg';
import MinimalisticCover from '../../assets/resources/project-covers/minimalistic.gif';

const Projects = () => {
  /* TODO: clean unused .svg's */
  return (
    <Wrapper>
      <div className="top-bar">
        <img className="top-bar-buttons" src={TopBarButtonsImage} alt="" />
        <img className="top-bar-middle" src={TopBarMiddleImage} alt="" />
        <img className="top-bar-squares" src={TopBarSquaresImage} alt="" />
      </div>
      <img className="human-image" src={HumanImage} alt="" />
      <div className="projects-container">
        <div className="project1">
          <img src={MinimalisticCover} alt="" />
        </div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
        <div className="project1"></div>
      </div>
      <div className="bottom-bar"></div>
    </Wrapper>
  );
};
export default Projects;
