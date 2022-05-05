import styled from 'styled-components';

export const Wrapper = styled.div`
  .title-container {
    width: 100%;
    text-align: center;
  }
  .projects-container {
    padding: 15px;
    display: none; /* Safari and Chrome */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    width: 100%;
    height: calc(100vh - 80px);
  }
  .project-card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    aspect-ratio: 16/9;

    .card-overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      max-width: 100%;
      max-height: 100%;
      aspect-ratio: 16/9;
      min-width: 100%;
      visibility: none;
      opacity: 0;
      background: black;
      transition: opacity 0.5s linear;
    }
    :hover > .card-overlay {
      opacity: 0.9;

      a {
        margin: 5px;
      }
    }
    img {
      min-width: 100%;
      aspect-ratio: 16/9;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;
