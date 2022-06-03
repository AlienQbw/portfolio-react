import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 47%;
  height: 100%;
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .project-title {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    width: 90%;
    text-align: left;
    h3 {
      font-weight: 700;
      font-size: 36px;
      line-height: 48px;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p {
      margin: 0;
      color: rgba(0, 0, 0, 0.41);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      font-weight: 700;
      font-size: 16px;
      line-height: 21px;
    }
  }
  .project-information {
    margin-left: auto;
    margin-right: auto;
    padding: 20px 0 20px 0;
    position: relative;
    width: 90%;
    /* From https://css.glass */
    background: rgba(0, 0, 0, 0.92);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.1px);
    -webkit-backdrop-filter: blur(5.1px);
    .macos-dots {
      padding-left: 15px;
      .dot1,
      .dot2,
      .dot3 {
        background-color: red;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        margin: 5px;
      }
      .dot1 {
        float: left;
        background-color: #ff5f56;
      }
      .dot2 {
        float: left;
        background-color: #ffbd2e;
      }
      .dot3 {
        float: left;
        background-color: #27c93f;
      }
    }
    p {
      margin: 0;
      color: #fdfdfd;
      .first-section {
        padding-left: 20px;
      }
      .second-section {
        padding-left: 35px;
      }
      .third-section {
        padding-left: 50px;
      }
      .fourth-section {
        padding-left: 65px;
      }
      .fifth-section {
        padding-left: 80px;
        color: #e9aefe;
      }
      .span-blue {
        color: #5985db;
      }
      .span-red {
        color: #f7508b;
      }
    }
  }
  .technology {
    width: 60%;
    height: 20%;
    margin-right: 28%;
    h4 {
      font-weight: 700;
      font-size: ${({ theme: { fontSize } }) => fontSize.m};
      line-height: 48px;
      color: #000000;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 0;
    }
  }
  .project-links {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    a {
      position: relative;
      display: inline-block;
      text-align: center;
      border-radius: 15px;
      margin: 10px;
      background-color: #000000;
      color: #fdfdfd;
      padding: 5px;
      width: 100px;
      transition: 0.5s;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
      :before {
        position: absolute;
        top: -110%;
        left: 50%;
        display: block;
        content: '';
        width: 0%;
        height: 100%;
        transition: 0.5s;
      }
      :hover:before {
        transition: 0.5s;
        left: 0;
        top: 0;
        width: 100%;
        border-bottom: 2px solid black;
      }
      :hover {
        box-shadow: none;
        transition: 0.5s;
        background-color: white;
        color: black;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      :checked {
        transform: scale(1.2);
        transition: 0.1s;
      }
    }
  }
`;
