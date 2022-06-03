import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 10% 15px 10%;
  display: none; /* Safari and Chrome */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  .projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 15px;
    width: 90%;
    height: 80%;
    background-color: #204264;
    button {
      cursor: pointer;
      position: absolute;
      background: transparent;
      border: transparent;
      height: 50px;
    }
    .arrow-left {
      left: 10px;
      top: calc(50% - 50px);
    }
    .arrow-right {
      top: calc(50% - 50px);
      right: 10px;
      img {
        transform: rotate(180deg);
      }
    }
    .dots {
      position: absolute;
      bottom: 20px;
      left: calc((100% - 70%) / 2);
      width: 70%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .dot {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid ${({ theme: { colors } }) => colors.orange};
        display: flex;
        justify-content: center;
        align-items: center;
        .dot-active {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: ${({ theme: { colors } }) => colors.links};
        }
      }
    }
  }
`;
