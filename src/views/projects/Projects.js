import { Wrapper } from './Projects.styles';
import HumanImage from '../../assets/svg/projects-svg/human-talking.svg';
/* import TopBarButtonsImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-button-elements2.svg';
import TopBarSquaresImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-square-elements.svg';
import TopBarMiddleImage from '../../assets/svg/projects-svg/top-bar-elements/top-bar-middle-element.svg'; */
import MinimalisticCover from '../../assets/resources/project-covers/minimalistic.gif';

const Projects = () => {
  /* TODO: clean unused .svg's */
  return (
    <Wrapper>
      {/*       <div className="top-bar">
        <img className="top-bar-buttons" src={TopBarButtonsImage} alt="" />
        <img className="top-bar-middle" src={TopBarMiddleImage} alt="" />
        <img className="top-bar-squares" src={TopBarSquaresImage} alt="" />
      </div> */}
      <img className="human-image" src={HumanImage} alt="" />
      <div className="projects-container">
        <div className="project-card">
          <img className="project-card-image" src={MinimalisticCover} alt="" />
          <div className="card-overlay">
            <a href="github.com">Link</a>
            <a href="github.com">Github</a>
            <a href="github.com">More about this project</a>
          </div>
        </div>
        <div className="project-card">
          <img
            className="project-card-image"
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div className="card-overlay">
            <a href="github.com">Github</a>
          </div>
        </div>
      </div>
      {/*       <div className="bottom-bar"></div> */}
    </Wrapper>
  );
};
export default Projects;
