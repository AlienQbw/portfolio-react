import { useEffect, useState } from 'react';
import { Wrapper } from './CodingProjects.styles';
import projectsData from 'data/ProjectsData';
import ProjectCard from 'components/organisms/ProjectCard/ProjectCard';

const CodingProjects = ({ changeBackground }) => {
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

  useEffect(() => {
    changeBackground(true);
    setData([...projectsData]);

    return () => {
      changeBackground(false);
    };
  }, []);
  return (
    <Wrapper>
      <div className="projects-container">
        {data.map((item) => (
          <ProjectCard key={item} data={item} />
        ))}
      </div>
    </Wrapper>
  );
};
export default CodingProjects;
