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

  return <Wrapper width={percentage[1]} color={color} item={item}></Wrapper>;
};
export default TechnologyBar;
