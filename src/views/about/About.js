import { Wrapper } from './About.styles';

const About = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="about-container">
          <div className="about-me">
            <h1>About me</h1>
            <div className="paragraph">
              <p>
                Hello, I'm a self-learning frontend developer, through research
                & creation. I love writing websites, and discovering new
                technologies.
                <br />
                <br />
                I have just graduated (2022) from the Poznan University of
                Technology in the field of "Engineering Management".
                <br />
                <br />
                In addition to programming, I play the piano, computer games,
                Arduino, watch formula 1, and create various designs for&nbsp;
                <a href="https://www.facer.io/u/alienq" target="_blank">
                  smartwatch faces
                </a>
                .
                <br />
                <br />
                If you want to know more about me, check out some of my previous
                projects.
              </p>
            </div>
          </div>
          <div className="skills-experience">
            <h1>Skills & Experience</h1>
            <div className="paragraph">
              <p>
                My programming journey have started in technical highschool, and
                my interest with the begining of my studies, and i’m in love
                with it ever since.
                <br />
                <br />
                Experience and knowledge that I get could be shorlt described as
                “Google” but of course there is more to that.
                <br />
                <br />
                I’ve completed online courses in languages of my interest, I’ve
              </p>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <h2>My core:</h2>
          <ul>
            <li>Javascript ES6+</li>
            <li>HTML5</li>
            <li>CSS3 and SASS</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Dev Tools:</h2>
          <ul>
            <li>Operating system: macOS / Linux</li>
            <li>Code editor: Visual Studio Code</li>
            <li>GitHub</li>
            <li>Version control: Git</li>
            <li>Designning tools: Gimp, Figma, paper&pen</li>
            <li>Planning and organizing: Trello, Google Calendar</li>
          </ul>
        </div>
        <div className="skills-container">
          <h2>Also worked with:</h2>
          <ul>
            <li>PHP</li>
            <li>SQL</li>
            <li>Arduino</li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default About;
