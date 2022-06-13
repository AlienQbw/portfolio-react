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
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  .aside-line:hover {
    color: ${({ theme }) => theme.colors.links};
  }
  .aside-line:after {
    content: '';
    position: absolute;
    width: 70px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.orange};
    top: 14px;
    left: -5px;
    transition: 1s;
    border-radius: 10px;
  }
  .active:after {
    width: 90px;
    height: 4px;
  }

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;
