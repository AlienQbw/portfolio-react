import styled from 'styled-components';

export const Wrapper = styled.div`
  .hamburger {
    display: none;
  }
  .navigation-container {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      font-size: ${({ theme }) => theme.fontSize.m};
      padding: 20px 40px 20px 40px;

      a {
        color: ${({ theme }) => theme.colors.orange};
      }
    }
    .nav-links {
      padding: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    ul {
      margin-right: 80px;
      li {
        float: left;
        font-size: ${({ theme }) => theme.fontSize.sm};
        list-style-type: none;
        margin: 5px 20px 5px 20px;
        a {
          display: inline-block;
          text-decoration: none;
          color: ${({ theme: { colors } }) => colors.links};
          border-bottom: 1px solid ${({ theme: { colors } }) => colors.orange};
          border: transparent;
          :hover {
            transition: 0.25s;
            transform: rotate(5deg);
            border-bottom: 1px solid ${({ theme: { colors } }) => colors.orange};
          }
          :active {
            transition: 1s;
            transform: scale(1.8);
          }
        }
      }
    }
    .nav-icon-links-container {
      .nav-icon-links {
        margin: 15px;
        height: 40px;
        width: 40px;

        img {
          height: 40px;
          width: 40px;
        }
      }
    }
  }

  @media (orientation: portrait) and (max-width: 1000px),
    screen and (max-height: 450px) {
    .hamburger {
      background: none;
      border: none;
      display: block;
      position: absolute;
      left: 30px;
      top: 30px;
      width: 40px;
      height: 40px;
      padding: 0;
      cursor: pointer;
      z-index: 99;
      .hamburger-lines {
        position: relative;
        width: 40px;
        height: 3px;
        background-color: ${({ theme: { colors } }) => colors.orange};
        ::before,
        ::after {
          content: '';
          position: absolute;
          background-color: ${({ theme: { colors } }) => colors.orange};
          width: 40px;
          height: 3px;
          left: 0;
        }
        ::before {
          top: 10px;
        }
        ::after {
          bottom: 10px;
        }
      }
    }
    .navigation-container {
      position: absolute;
      overflow: hidden;
      z-index: 98;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      ${({ overlayActive }) =>
        overlayActive ? 'display: flex' : 'display: none'};
      justify-content: center;
      background-color: ${({ theme: { colors } }) => colors.otherBackground3};
      h3 {
        display: none;
      }
      .nav-links {
        flex-direction: column;
        ul {
          margin: 0;
          padding: 0;
          li {
            float: none;
            text-align: center;
            font-size: ${({ theme }) => theme.fontSize.lm};
          }
        }
      }
      .nav-icon-links-container {
        margin: 10px;
      }
    }
  }
  @media (orientation: landscape) and (max-width: 1000px) and (max-height: 450px) {
    .nav-links {
      flex-direction: row;
    }
  }
`;
