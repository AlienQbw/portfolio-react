import { Wrapper } from './TechnologyBar.styles';
import { theme } from 'assets/styles/theme';
import { useEffect, useState } from 'react';
const TechnologyBar = ({ item }) => {
  const percentage = item.split(' ');
  const [color, setColor] = useState('');
  useEffect(() => {
    Object.getOwnPropertyNames(theme.colors).forEach((val) => {
      if (val === percentage[0]) {
        setColor(theme.colors[val]);
      }
    });
  }, []);

  return (
    <Wrapper width={percentage[1]} color={color} item={item}>
      <h5 className="technology-title">{item}</h5>
    </Wrapper>
  );
};
export default TechnologyBar;
