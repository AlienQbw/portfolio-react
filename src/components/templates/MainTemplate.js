import Aside from 'components/organisms/Aside/Aside';
import useCheckIfMobile from 'hooks/useCheckIfMobile';
import Navigation from '../organisms/Navigation/Navigation';
import Wrapper from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  const isMobile = useCheckIfMobile();
  return (
    <>
      <Wrapper>
        <Navigation />
        {isMobile ? '' : <Aside />}
        {children}
      </Wrapper>
    </>
  );
};
export default MainTemplate;
