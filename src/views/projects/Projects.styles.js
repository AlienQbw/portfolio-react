import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  .human-image {
    position: absolute;
    z-index: 1;
    bottom: 0px;
    right: 0;
  }
  .shape-image {
    width: 30%;
    height: 50%;
    position: absolute;
    left: 45%;
    top: 25%;
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    .links-containers {
      position: relative;

      .discover-image {
        position: absolute;
        top: -100px;
        left: 230px;
        animation: arrowJumping 1s linear infinite;
      }
      .link-container {
        width: fit-content;
        h2 {
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: ${({ theme: { fontSize } }) => fontSize.l};
          font-weight: bold;
          color: #fff;
          text-decoration: underline;
        }
      }
    }
  }
  @media screen and (max-width: 1000px), screen and (max-height: 450px) {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.background};
    .human-image {
      display: none;
    }
    .container {
      .shape-image {
        display: none;
      }
      .links-containers {
        .discover-image {
          display: none;
        }
        .link-container {
          h2 {
            font-size: ${({ theme: { fontSize } }) => fontSize.lm};
          }
          padding-left: 20px;
        }
      }
    }
  }

  @keyframes arrowJumping {
    0% {
      top: -100px;
    }
    50% {
      top: -105px;
    }
    100% {
      top: -100px;
    }
  }
`;
