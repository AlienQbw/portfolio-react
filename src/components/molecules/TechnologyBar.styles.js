import styled from 'styled-components';

export const Wrapper = styled.div`
  position: realtive;
  float: left;
  height: 10px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  h5 {
    margin: 0;
    font-size: ${({ theme: { fontSize } }) => fontSize.esm};
    margin: 15px;
    color: ${(props) => props.color};
  }
`;
