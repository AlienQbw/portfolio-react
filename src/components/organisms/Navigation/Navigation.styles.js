import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 20px 40px 20px 40px;

    a {
      color: ${({ theme }) => theme.colors.orange}
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
  }
  ul li {
    float: left;
    font-size: ${({ theme }) => theme.fontSize.sm};
    list-style-type: none;
    margin: 5px 20px 5px 20px;
    margin
  }
  ul li a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.links};
  }
  .nav-icon-links {
    margin: 15px;
    height: 40px;
    width: 40px;

    img {
      height: 40px;
      width: 40px;
    }
  }
`;
