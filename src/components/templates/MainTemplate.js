import Aside from 'components/organisms/Aside/Aside';
import Navigation from '../organisms/Navigation/Navigation';
import Wrapper from './MainTemplate.styles';
const MainTemplate = ({ children }) => {
  return (
    <>
      <Wrapper className="template-wrapper">
        <Navigation />
        <Aside />
        {children}
      </Wrapper>
    </>
  );
};
export default MainTemplate;
