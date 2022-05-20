import { useEffect, useState } from 'react';
import { Wrapper } from './Courses.styles';
import HelloRomanReactThumbnail from 'assets/resources/courses/helloRomanReact.jpg';
import JonasSchmedtmannJavaScriptThumbnail from 'assets/resources/courses/jonasSchmedtmannJavaScript.jpg';
import JonasSchmedtmannHtmlCssThumbnail from 'assets/resources/courses/jonasSchmedtmannHtmlCss.jpg';
import JonasSchmedtmannAdvancedStylingThumbnail from 'assets/resources/courses/jonasSchmedtmannAdvancedStyling.jpg';

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);
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
  ];

  useEffect(() => {
    setCoursesList(...coursesList, data);
  }, []);

  console.log(coursesList);
  /* TODO: hover animation which shows the title of the course + animations */
  return (
    <Wrapper>
      <h2>Courses from which I've learnt!</h2>
      <div className="grid-container">
        {coursesList.map((item, id) => {
          return (
            <div className="grid-item" id={`grid-item-${id}`} key={id}>
              <h3>{item.name}</h3>
              <img src={item.thumbnail} alt="" />
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default Courses;
