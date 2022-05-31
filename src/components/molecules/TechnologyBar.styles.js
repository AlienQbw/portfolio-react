import styled from 'styled-components';

export const Wrapper = styled.div`
  position: realtive;
  float: left;
  height: 8px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
`;
