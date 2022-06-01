import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: relative;
  .projects-card {
    position: relative;
    background-color: ${({ theme: { colors } }) => colors.otherBackground1};
    height: 230px;
    border-radius: 0px 15px 15px 0;
    :before {
      content: '';
      position: absolute;
      left: -8px;
      height: 100%;
      width: 8px;
      background-color: ${({ theme: { colors } }) => colors.links};
      border-radius: 15px 0 0 15px;
    }
    .cover {
      float: left;
      height: 100%;
      max-width: 45%;
      position: relative;
      img {
        display: block;
        aspect-ratio: 16/9;
        max-width: 100%;
        height: 230px;
      }
    }
    .project-information {
      float: left;
      max-width: 55%;
      text-align: left;
      h2 {
        padding-left: 5px;
      }
      p {
        margin: 0 0 20px 0;
        padding-left: 5px;
        width: 100%;
      }
      .links {
        float: left;
      }
      .technology {
        position: absolute;
        right: 20px;
        bottom: 20px;
        width: 30%;
        h4,
        li {
          color: ${({ theme: { colors } }) => colors.text};
        }
        ul {
          font-size: ${({ theme: { fontSize } }) => fontSize.esm};
          display: grid;
          width: 100%;
          grid-template-columns: 1fr 1fr;
          grid-gap: 5px;
          text-transform: uppercase;
          margin: 0;
          padding: 10px 0 0 0;
          li {
            margin-left: 15px;
          }
        }
        .technology-bar-container {
          width: 100%;
        }
      }
    }
  }
`;
