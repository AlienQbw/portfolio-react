import TechnologyBar from 'components/molecules/TechnologyBar';
import { Wrapper } from './ProjectCard.styles';

const ProjectCard = ({
  data: { cover, title, description, github, liveversion, technology },
}) => {
  return (
    <Wrapper>
      <div className="projects-card">
        <div className="cover">
          <img src={cover} alt="Project's cover" />
        </div>
        <div className="project-information">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="links">
            <ul>
              <li>
                <a href={github}>Github</a>
              </li>
              <li>
                <a href={liveversion}>Live Version</a>
              </li>
            </ul>
          </div>
          <div className="technology">
            <h4>Languages</h4>
            <div className="technology-bar-container">
              {technology.map((item) => (
                <TechnologyBar key={item} item={item} />
              ))}
            </div>

            <ul>
              {technology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default ProjectCard;

/*
    <div className="projects-card">
        <div className="cover">
          <img src={cover} alt="Project's cover" />
        </div>
        <div className="project-information">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="links">
            <ul>
              <li>
                <a href={github}>Github</a>
              </li>
              <li>
                <a href={liveversion}>Live Version</a>
              </li>
            </ul>
          </div>
          <div className="technology">
            <h4>Languages</h4>
            <div className="technology-bar-container">
              {technology.map((item) => (
                <TechnologyBar key={item} item={item} />
              ))}
            </div>

            <ul>
              {technology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
*/
