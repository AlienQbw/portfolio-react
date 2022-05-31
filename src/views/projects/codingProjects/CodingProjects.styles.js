import styled from 'styled-components';

export const Wrapper = styled.div`
  .projects-container {
    padding: 15px 10% 15px 10%;
    display: none; /* Safari and Chrome */
    -ms-overflow-style: none; /* Internet Explorer 10+ */
    scrollbar-width: none; /* Firefox */
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    width: 100%;
    height: calc(100vh - 80px);
  }
`;
