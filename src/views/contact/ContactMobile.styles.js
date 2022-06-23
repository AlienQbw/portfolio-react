import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { colors } }) => colors.links};
  overflow: hidden;
  h1 {
    font-size: ${({ theme: { fontSize } }) => fontSize.lm};
    position: relative;
    line-height: 100%;
    padding-left: 5px;
    ::before {
      position: absolute;
      left: -5px;
      content: '';
      width: 2px;
      height: 100%;
      background-color: ${({ theme: { colors } }) => colors.orange};
    }
  }
  h2 {
    font-size: ${({ theme: { fontSize } }) => fontSize.m};
  }

  .contact-container {
    height: calc(90% - 50px);
    width: 90%;
    border-radius: 16px;
    margin-top: 50px;
    /*     background: rgba(0, 0, 0, 0.92);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px); */
    padding: 15px;
    .contact {
      height: 50%;
      h1 {
        height: 15%;
      }
      .email {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 85%;
        width: 100%;
        h2 {
          background-color: ${({ theme: { colors } }) =>
            colors.otherBackground1};
          padding: 25px;
          border-radius: 16px;
          color: #fff;
        }
      }
    }
    .social-media {
      height: 50%;
      h1 {
        height: 15%;
      }
      .social-media-links {
        display: flex;
        justify-content: center;
        align-items: center;
        width: fit-content;
        height: 85%;
        width: 100%;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        .links {
          padding: 50px;
          border-radius: 16px;
          background-color: ${({ theme: { colors } }) =>
            colors.otherBackground1};
          width: fit-content;
          height: fit-content;
          @media (orientation: landscape) {
            padding-top: 10px;
            padding-bottom: 10px;
          }
          @media (max-width: 400px) {
            padding: 20px;
          }
          a {
            padding: 10px;
            img {
              width: 80px;
              height: 80px;
            }
          }
        }
      }
    }
  }
  .contact-image {
    position: absolute;
    bottom: 0;
    right: 0;
    img {
      width: 200px;
      @media (max-width: 400px) {
        width: 100px;
      }
    }
  }
`;
export default Wrapper;
