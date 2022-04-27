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
    /* TODO: can use repeat(6, 1fr) */
    /*
    * For start and end we can use 1 / 4 (which will mean that it starts at 1 and ends at 4)
    */
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    h2 {
      color: ${({ theme: { colors } }) => colors.links};
    }
    .about-container {
      grid-column-start: 1;
      grid-column-end: 7;
      .about-me {
        float: left;
      }
      .skills-experience {
      }
    }
    .skills-container {
      color: ${({ theme: { colors } }) => colors.text};
      padding: 0 0px 0 20px;
      grid-row: 2;
      li {
        font-size: ${({ theme: { fontSize } }) => fontSize.sm};
      }
    }
  }
`;
