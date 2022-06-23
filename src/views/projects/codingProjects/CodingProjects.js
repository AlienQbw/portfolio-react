import { useEffect, useState } from 'react';
import { Wrapper } from './CodingProjects.styles';
import projectsData from 'data/ProjectsData';
import ProjectCard from 'components/organisms/ProjectCard/ProjectCard';
import useCheckIfMobile from 'hooks/useCheckIfMobile';

const CodingProjects = ({ changeBackground }) => {
  const isMobile = useCheckIfMobile();

  const [data, setData] = useState([
    {
      cover: '',
      title: '',
      description: '',
      github: '',
      liveversion: '',
      technology: [],
    },
  ]);
  const [activeProject, setActiveProject] = useState(0);
  const changeActiveProject = (id) => {
    setActiveProject(id);
  };
  useEffect(() => {
    isMobile ? changeBackground(false) : changeBackground(true);
    return () => {
      isMobile ? changeBackground(false) : changeBackground(true);
    };
  }, [isMobile]);

  useEffect(() => {
    //changeBackground(true);
    setData([...projectsData]);

    return () => {
      //changeBackground(false);
    };
  }, []);
  return (
    <Wrapper>
      <div className="projects-titles-container">
        {data.map((item, id) => (
          <h2
            className={`${activeProject === id ? 'active-title' : ''}`}
            onClick={() => changeActiveProject(id)}
            key={id}
          >
            {item.title}
          </h2>
        ))}
      </div>
      <div className="project-card">
        <ProjectCard data={data[activeProject]} />
      </div>
    </Wrapper>
  );
};
export default CodingProjects;
/*
      <div className="projects-container">
        {data.map((item, id) => (
          <ProjectCard key={id} data={item} />
        ))}
      </div>
*/
