import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  height: calc(100vh - 80px);
  width: 15vw;
  background-color: gray;
  background: transparent;

  li {
    list-style-type: none;
  }
  .aside-line {
    position: relative;
    color: transparent;
    transition: 1s;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  .aside-line:hover {
    color: ${({ theme }) => theme.colors.links};
  }
  .aside-line:after {
    content: '';
    position: absolute;
    width: 75px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.orange};
    top: 17px;
    left: -5px;
    transition: 1s;
  }
  .active:after {
    width: 95px;
  }
`;
