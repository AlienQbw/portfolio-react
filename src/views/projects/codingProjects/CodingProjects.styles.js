import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none; /* Safari and Chrome */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
  overflow-y: scroll;
  display: block;
  width: 100%;
  height: calc(100vh - 80px);
  .projects-titles-container {
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    width: 53%;
    height: 100%;

    float: left;

    h2 {
      padding-top: 20px;
      padding-bottom: 20px;
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      width: fit-content;
      position: relative;
    }
    .active-title {
      :after {
        position: absolute;
        background-color: ${({ theme: { colors } }) => colors.orange};
        display: block;
        content: '';
        width: 100px;
        height: 10px;
        right: -120px;
        border-radius: 15px;
        top: 50%;
      }
    }
  }
  .project-card {
    height: 100%;
  }
`;
