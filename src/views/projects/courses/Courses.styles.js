import styled from 'styled-components';

export const Wrapper = styled.div`
  .description-container {
    border-radius: 15px;
    padding: 20px;
    margin: 4%;
    margin-bottom: 0;
    p {
      padding-left: 15px;
    }
  }
  .grid-container {
    padding: 4%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: 25px;
    .grid-item {
      background-color: ${({ theme: { colors } }) => colors.otherBackground1};
      -webkit-box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      border-radius: 15px;
      img {
        border-radius: 15px 15px 0 0;
        aspect-ratio: 16/9;
        width: 100%;
      }
      .grid-item-heading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 150px;
        h3 {
          text-align: center;
          color: ${({ theme: { colors } }) => colors.text};
        }
      }
    }
    #grid-item-1 {
    }
  }
`;
