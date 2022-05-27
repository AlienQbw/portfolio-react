import { useEffect, useState } from 'react';
import { Wrapper } from './Courses.styles';
import HelloRomanReactThumbnail from 'assets/resources/courses/helloRomanReact.jpg';
import JonasSchmedtmannJavaScriptThumbnail from 'assets/resources/courses/jonasSchmedtmannJavaScript.jpg';
import JonasSchmedtmannHtmlCssThumbnail from 'assets/resources/courses/jonasSchmedtmannHtmlCss.jpg';
import JonasSchmedtmannAdvancedStylingThumbnail from 'assets/resources/courses/jonasSchmedtmannAdvancedStyling.jpg';
import FreeCodeCampReact10h from 'assets/resources/courses/freeCodeCampReact10h.jpg';

const Courses = (props) => {
  const [coursesList, setCoursesList] = useState([]);
  useEffect(() => {
    props.changeBackground(true);

    return () => {
      props.changeBackground(false);
    };
  }, []);

  const data = [
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
    {
      name: 'Jonas Schmedtmann - The Complete JavaScript Course',
      thumbnail: JonasSchmedtmannJavaScriptThumbnail,
    },
    {
      name: 'Jonas Schmedtmann - Responsive Real-World Websites with HTML and CSS',
      thumbnail: JonasSchmedtmannHtmlCssThumbnail,
    },
    {
      name: 'Jonas Schmedtmann - SASS, Flexbox, Grid, Animations and More!',
      thumbnail: JonasSchmedtmannAdvancedStylingThumbnail,
    },
    {
      name: 'FreeCodeCamp.org - React in 10h',
      thumbnail: FreeCodeCampReact10h,
    },
  ];

  useEffect(() => {
    setCoursesList(...coursesList, data);
  }, []);

  /* TODO: hover animation which shows the title of the course + animations */
  return (
    <Wrapper>
      <div className="description-container">
        <h2>Knwoledge sources:</h2>
        <p>
          What I've always loved about programming, is the idea of continuous
          development and improvement using lots of free and easily accessible
          resources. It's almost magical that in this day and age, basically
          anyone with enough effort and perseverance can learn to code.
        </p>
        <p>
          These resources, available to everyone, have allowed me to gain my
          current knowledge and experience.
        </p>
        <p>
          Besides reading documentation, building projects, reading articles,
          I've always appreciated courses where someone spends so much time
          helping people. Some of the courses I have completed and which I can
          highly recommend to everyone, are listed below:
        </p>
      </div>
      <div className="grid-container">
        {coursesList.map((item, id) => {
          return (
            <div className="grid-item" id={`grid-item-${id}`} key={id}>
              <img src={item.thumbnail} alt="" />
              <div className="grid-item-heading">
                <h3>{item.name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Courses;
