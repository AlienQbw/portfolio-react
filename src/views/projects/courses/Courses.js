import { useEffect, useState } from 'react';
import { Wrapper } from './Courses.styles';
import HelloRomanReactThumbnail from 'assets/resources/courses/helloRomanReactCircle.jpg';
import JonasSchmedtmannJavaScriptThumbnail from 'assets/resources/courses/jonasSchmedtmannJavaScriptCircle.jpg';
import JonasSchmedtmannHtmlCssThumbnail from 'assets/resources/courses/jonasSchmedtmannHtmlCssCircle.jpg';
import JonasSchmedtmannAdvancedStylingThumbnail from 'assets/resources/courses/jonasSchmedtmannAdvancedStylingCircle.jpg';
import FreeCodeCampReact10h from 'assets/resources/courses/freeCodeCampReact10hCircle.jpg';

const Courses = ({ changeBackground }) => {
  const [coursesList, setCoursesList] = useState([]);
  useEffect(() => {
    changeBackground(true);

    return () => {
      changeBackground(false);
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
        <h2>Knowledge sources:</h2>
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
      <div className="resources">
        <h2>Newsletter</h2>
        <p>
          I’m also highly recommending, subscription to the newsletter to keep
          up with current trends. Those are some that I suggest:
        </p>
        <ul>
          <li>
            <a href="https://css-weekly.com/">cssweekly</a>
          </li>
          <li>
            <a href="https://javascriptweekly.com/">JavaScript Weekly</a>
          </li>
          <li>
            <a href="https://nodeweekly.com/">Node Weekly</a>
          </li>
          <li>
            <a href="https://react.statuscode.com/">React status</a>
          </li>
        </ul>
      </div>
      <div className="grid-container">
        {coursesList.map((item, id) => {
          return (
            <div className="grid-item" id={`grid-item-${id}`} key={id}>
              <div className="grid-item-image">
                <img src={item.thumbnail} alt="" />
              </div>

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
