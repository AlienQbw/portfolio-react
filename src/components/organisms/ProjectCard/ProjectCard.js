import TechnologyBar from 'components/molecules/TechnologyBar';
import { Wrapper } from './ProjectCard.styles';

const ProjectCard = ({
  data: {
    cover,
    title,
    subtitle,
    description,
    description2,
    github,
    liveversion,
    technology,
  },
}) => {
  return (
    <Wrapper>
      <div className="project-title">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
      <div className="project-information">
        <div className="macos-dots">
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
          <br />
          <br />
        </div>
        <p>
          <p className="first-section">
            <span className="span-blue">{'const'}</span>&nbsp;
            <span className="span-red">ProjectInformation</span>&nbsp;
            <span className="span-blue">=</span>&nbsp;()&nbsp;
            <span className="span-blue">{'=>'}</span>&nbsp;
            {'{'}
          </p>

          <p className="second-section">
            <span className="span-blue">return</span>&nbsp; (
          </p>
          <p className="third-section">
            <span className="span-blue">{'<'}</span>
            <span className="span-red">Wrapper</span>
            <span className="span-blue">{'>'}</span>
          </p>

          <p className="fourth-section">
            <span className="span-blue">{'<'}</span>
            <span className="span-red">p</span>
            <span className="span-blue">{'>'}</span>
          </p>

          <p className="fifth-section">{description}</p>

          <p className="fourth-section">
            <span className="span-blue">{'<'}</span>
            <span className="span-red">p</span>
            <span className="span-blue">{'/>'}</span>
          </p>

          <p className="third-section">
            <span className="span-blue">{'<'}</span>
            <span className="span-red">Wrapper</span>
            <span className="span-blue">{'/>'}</span>);
          </p>
          <p className="first-section">{'}'}</p>
        </p>
      </div>
      <div className="technology">
        <h4>Languages</h4>
        <div className="technology-bar-container">
          {technology.map((item) => (
            <TechnologyBar key={item} item={item} />
          ))}
        </div>
      </div>
      <div className="project-links">
        <a href={github} target="_blank">
          GitHub
        </a>
        <a href={liveversion} target="_blank">
          Live
        </a>
      </div>
    </Wrapper>
  );
};
export default ProjectCard;
