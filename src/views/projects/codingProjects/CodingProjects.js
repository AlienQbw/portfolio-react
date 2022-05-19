import { Wrapper } from './CodingProjects.styles';
import MinimalisticCover from '../../../assets/resources/project-covers/minimalistic.gif';
const CodingProjects = () => {
  return (
    <Wrapper>
      <div className="title-container">
        <h1 className="title">
          What do I do<span>?</span>
        </h1>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img className="project-card-image" src={MinimalisticCover} alt="" />
          <div className="card-overlay">
            <h3>Minimalistic</h3>
            <p>
              It's a wallpaper app, which uses Image compressor algorithm in
              order to create a picture thumbnails. There is also builtin
              searchbar
            </p>
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
    </Wrapper>
  );
};
export default CodingProjects;