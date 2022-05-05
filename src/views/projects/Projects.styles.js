import { computeHeadingLevel } from '@testing-library/react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  .human-image {
    position: absolute;
    z-index: 99;
    bottom: -11px;
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
