import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .grid-container {
    padding: 4%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: 5px;
    .grid-item {
      img {
        aspect-ratio: 16/9;
        width: 100%;
      }
    }
  }
`;
