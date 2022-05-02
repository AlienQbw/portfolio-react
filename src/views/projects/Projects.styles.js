import styled from 'styled-components';

export const Wrapper = styled.div`
  float: left;
  width: calc(100% - 15vw);
  height: calc(100vh - 80px);
  .human-image {
    position: absolute;
    bottom: 0;
    right: 0;
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
  .project1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .bottom-bar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10px;
    border-bottom: 2px solid white;
  }
`;
