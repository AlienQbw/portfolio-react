import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  .projects-card {
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.otherBackground1};
    border-radius: 0px 15px 15px 0;
    .cover {
      float: left;
      height: 100%;
      max-width: 55%;
      img {
        display: block;
        aspect-ratio: 16/9;
        max-width: 100%;
        border-radius: 15px;
      }
    }
    .project-information {
      float: left;
      max-width: 45%;
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
        left: 20px;
        bottom: 20%;
        width: 100%;
        padding: 0 50% 0 0;
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

/*

  width: 80%;
  height: 80%;
  position: relative;
  .projects-card {
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.otherBackground1};
    border-radius: 0px 15px 15px 0;
    .cover {
      float: left;
      height: 100%;
      max-width: 55%;
      img {
        display: block;
        aspect-ratio: 16/9;
        max-width: 100%;
        border-radius: 15px;
      }
    }
    .project-information {
      float: left;
      max-width: 45%;
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
        left: 20px;
        bottom: 20%;
        width: 100%;
        padding: 0 50% 0 0;
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
  */
