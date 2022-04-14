import styled from 'styled-components';
import Wave from '../../assets/svg/test.svg';
/* TODO: wave.svg animation in the background (if you uncomment background-image, the other svg is working) */
const Wrapper = styled.div`
  /* background-image: url(${Wave}); */
  min-height: 100vh;
  max-height: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default Wrapper;
