import styled from 'styled-components';

export const Wrapper = styled.div`
  .description-container {
    border-radius: 15px;
    padding: 20px;
    margin: 4%;
    margin-bottom: 0;
    background-color: rgba(32, 66, 100, 0.5);
    h2 {
      color: #f2f4f5;
      border-left: 2px solid ${({ theme: { colors } }) => colors.orange};
      padding-left: 15px;
    }
    p {
      padding-left: 25px;
    }
  }
  .resources {
    border-radius: 15px;
    padding: 20px;
    margin: 4%;
    margin-bottom: 0;
    background-color: rgba(32, 66, 100, 0.5);
    h2 {
      color: #f2f4f5;
      border-left: 2px solid ${({ theme: { colors } }) => colors.orange};
      padding-left: 15px;
    }
    p {
      padding-left: 25px;
    }
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      list-style-position: inside;
      li {
        transition: 0.5s;
        overflow: hidden;
        :after {
          content: '';
          display: block;
          background: ${({ theme: { colors } }) => colors.orange};
          width: 100%;
          height: 2px;
          transform: translateX(-105%);
        }
        :hover {
          transition: 0.5s;
          transform: scale(1.05);
          transform: rotate(5deg);
        }
        :hover:after {
          transition: 0.5s;
          transform: translateX(0);
        }
      }
    }
  }
  .grid-container {
    padding: 4%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto 1fr auto;
    grid-gap: 25px;
    .grid-item {
      //background-color: ${({ theme: { colors } }) => colors.otherBackground2};
      background-color: rgba(32, 66, 100, 0.5);
      -webkit-box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      -moz-box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      box-shadow: 8px 8px 24px 0px rgba(0, 33, 67, 1);
      border-radius: 15px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      padding-top: 25px;
      transition: 0.5s;
      .grid-item-image {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          border-radius: 15px 15px 0 0;
          width: 60%;
        }
      }
      :hover {
        transform: scale(1.02);
        transition: 0.5s;
      }
      .grid-item-heading {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height: 150px;
        h3 {
          max-width: 90%;
          text-align: center;
          //color: ${({ theme: { colors } }) => colors.text};
          color: #fff;
          border-bottom: 4px solid ${({ theme: { colors } }) => colors.orange};
        }
      }
    }
    #grid-item-1 {
    }
  }
  @media (max-width: 1000px), (max-height: 450px) {
    margin-top: 80px;
    .resources {
      ul {
        padding: 0;
        flex-direction: column;
        li {
          a {
            color: ${({ theme: { colors } }) => colors.links};
          }
        }
      }
    }
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
`;
