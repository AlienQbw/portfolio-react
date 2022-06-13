import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  h1 {
    color: ${({ theme }) => theme.colors.links};
  }
  h2 {
    color: ${({ theme }) => theme.colors.text};
    span {
      position: relative;
      ::after {
        display: block;
        position: absolute;
        bottom: 10px;
        right: -23px;
        content: '';
        width: 23px;
        height: 4px;
        background: ${({ theme: { colors } }) => colors.text};
        animation: writingCursor 1s infinite linear;
      }
    }
  }
  .name {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    padding-left: 100px;
    float: left;
    width: 50%;
    height: 100%;
    div {
      h1 {
      }
      h2 {
        margin-top: 20px;
      }
    }
  }
  .home-svg {
    float: left;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-bottom: 100px;
  }

  @keyframes writingCursor {
    25% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1000px), screen and (max-height: 450px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .name {
      padding: 0;
      height: fit-content;
      width: fit-content;

      h1 {
        width: 100%;
      }
      h2 {
        span {
          ::after {
            display: none;
          }
        }
      }
    }
    .home-svg {
      display: none;
    }
  }
`;
