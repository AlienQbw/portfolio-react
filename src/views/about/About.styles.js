import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    h2 {
      color: ${({ theme: { colors } }) => colors.links};
    }
    .about-container {
      grid-column-start: 1;
      grid-column-end: 7;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .about-me {
        margin: auto;
        margin-top: 50px;
        max-width: 90%;
        grid-column: 1;
        padding: 40px;
      }
      .skills-experience {
        margin: auto;
        margin-top: 50px;
        max-width: 90%;
        grid-column: 2;
        padding: 40px;
      }
      .paragraph {
        padding-left: 25px;

        a {
          color: ${({ theme: { colors } }) => colors.links};
          text-decoration: underline;
        }
      }
    }
    .skills-container {
      margin: auto;
      margin-top: 50px;
      color: ${({ theme: { colors } }) => colors.text};

      grid-row: 2;
      li {
        font-size: ${({ theme: { fontSize } }) => fontSize.sm};
      }
    }
  }

  @media screen and (max-width: 1000px), screen and (max-height: 450px) {
    width: 100vw;
    height: 100%;
    .container {
      display: block;
      .about-container {
        display: block;
        .about-me {
          padding: 10px;
        }
        .skills-experience {
          padding: 0;
        }
      }
      .skills-container {
        text-align: center;
        ul {
          max-width: 90%;
          margin-left: auto;
          margin-right: auto;
          padding: 0;
          list-style-type: none;
        }
      }
    }
  }
`;
