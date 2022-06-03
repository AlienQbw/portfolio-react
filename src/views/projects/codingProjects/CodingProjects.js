import { useEffect, useState } from 'react';
import { Wrapper } from './CodingProjects.styles';
import projectsData from 'data/ProjectsData';
import ProjectCard from 'components/organisms/ProjectCard/ProjectCard';
import arrow from '../../../assets/svg/single-arrow.png';
const CodingProjects = ({ changeBackground }) => {
  const [currProj, setCurrProj] = useState(0);
  const nextProject = () => {
    if (currProj !== data.length - 1) setCurrProj(currProj + 1);
  };
  const previousProject = () => {
    if (currProj !== 0) setCurrProj(currProj - 1);
  };
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
        <button className="arrow-left" onClick={() => previousProject()}>
          <img src={arrow} alt="" />
        </button>
        <button className="arrow-right" onClick={() => nextProject()}>
          <img src={arrow} alt="" />
        </button>
        <ProjectCard key={currProj} data={data[currProj]} />
        <div className="dots">
          {data.map((i, id) => (
            <div className="dot" key={id}>
              <div
                className={`${
                  currProj === id ? 'dot-active' : 'dot-not-active'
                }`}
              ></div>
            </div>
          ))}
        </div>
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
