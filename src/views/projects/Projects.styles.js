import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  .human-image {
    position: absolute;
    z-index: 99;
    bottom: 0;
    right: -450px;
    animation: humanAnimation 4s linear;
  }
  .top-bar {
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 2px solid white;
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
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

  .bottom-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    border-bottom: 2px solid white;
  }

  @keyframes humanAnimation {
    25% {
      right: 0;
    }
    50% {
      right: 0;
    }
    75% {
      right: 0;
    }
    100% {
      right: -450px;
    }
  }
`;
