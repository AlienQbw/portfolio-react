import styled from 'styled-components';
import f1 from '../../../assets/resources/hobbies-covers/f1.jpg';
import piano from '../../../assets/resources/hobbies-covers/piano.jpg';
import arduino from '../../../assets/resources/hobbies-covers/arduino.jpg';
import smartwatch from '../../../assets/resources/hobbies-covers/smartwatch.jpg';
import sport from '../../../assets/resources/hobbies-covers/sport.jpg';
export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  .hobbies-title {
    position: absolute;
    margin-top: 50px;
    margin-left: 50px;
    border-left: 2px solid ${({ theme: { colors } }) => colors.orange};
    overflow: hidden;
    h1 {
      padding-left: 15px;
      color: #f2f4f5;
      animation: titleShow 0.5s linear 1;
      font-weight: bold;
    }
  }
  .hobbies-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    .f1 {
      background-image: url(${f1});
    }
    .piano {
      background-image: url(${piano});
    }
    .arduino {
      background-image: url(${arduino});
    }
    .smartwatch {
      background-image: url(${smartwatch});
    }
    .sport {
      background-image: url(${sport});
    }
    .hobbies-card {
      position: relative;
      width: 250px;
      height: 300px;
      background-color: #fff;
      border-radius: 15px;
      background-position: center;
      background-size: cover;
      overflow: hidden;
      .hobbies-card-cover {
        height: 100%;
        width: 100%;
        border-radius: 15px;
        background: ${({ theme: { colors } }) => colors.text};
        opacity: 0.5;
      }
      .hobbies-card-title {
        position: absolute;
        bottom: 0;
        left: 10px;
        color: #000;
        font-size: ${({ theme: { fontSize } }) => fontSize.m};
        border-bottom: 2px solid ${({ theme: { colors } }) => colors.orange};
        z-index: 20;
      }
      .hobbies-card-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f2f4f5;
        transform: translateX(-100%);
        transition: 0.5s;
        p {
          color: ${({ theme: { colors } }) => colors.links};
          padding: 0 15px 15px 15px;
          a {
            color: ${({ theme: { colors } }) => colors.orange};
            text-decoration: underline;
          }
        }
      }
    }
    .hobbies-card:hover .hobbies-card-overlay {
      transform: translateX(0);
      transition: 0.5s;
    }
    .hobbies-card:hover .hobbies-card-title {
      color: ${({ theme: { colors } }) => colors.orange};
      border-bottom: 2px solid #000;
      transition: 0.5s;
    }
  }
  @keyframes titleShow {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @media (max-width: 1000px), (max-height: 450px) {
    height: 100%;
    margin-top: 80px;
    .hobbies-title {
      display: none;
    }
    .hobbies-container {
      flex-direction: column;
      justify-content: center;
      .hobbies-card {
        margin: 15px 0 15px 0;
        .hobbies-card-overlay {
          display: none;
        }
      }
    }
  }
  @media (orientation: landscape) and (max-width: 1000px), (max-height: 450px) {
    height: auto;
    .hobbies-container {
      .hobbies-card {
        width: 80%;
        height: 350px;
      }
    }
  }
`;
