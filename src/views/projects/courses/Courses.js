import { useEffect, useState } from 'react';
import { Wrapper } from './Courses.styles';
import HelloRomanReactThumbnail from 'assets/resources/courses/helloRomanReact.jpg';
import JonasSchmedtmannJavaScriptThumbnail from 'assets/resources/courses/jonasSchmedtmannJavaScript.jpg';

const Courses = () => {
  const [coursesList, setCoursesList] = useState([]);
  const data = [
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
    {
      name: 'Jonas Schmedtmann - Javascript Course',
      thumbnail: JonasSchmedtmannJavaScriptThumbnail,
    },
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
    {
      name: 'Hello Roman React Course',
      thumbnail: HelloRomanReactThumbnail,
    },
  ];

  const checkColumnNumber = (id) => {
    console.log(id);
    if (id === 0) {
      return id + 1;
    }
    if (id * 3 < 4 && id !== 0) {
      return id * 3 + 1;
    }
    let columnNumber = id * 3;
    while (columnNumber > 4) {
      columnNumber -= 4;
      if (columnNumber === 0) {
        return columnNumber++;
      }
    }

    return columnNumber;
  };

  useEffect(() => {
    setCoursesList(...coursesList, data);
  }, []);

  console.log(coursesList);

  return (
    <Wrapper>
      <h2>Courses from which I've learnt!</h2>
      <div className="grid-container">
        {coursesList.map((item, id) => {
          return (
            <div
              style={{
                gridColumnStart: `${checkColumnNumber(id)}`,
              }}
              className="grid-item"
              key={id}
            >
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
