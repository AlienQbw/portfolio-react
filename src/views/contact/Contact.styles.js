import styled from 'styled-components';

export const Wrapper = styled.div`
  h1,
  h2 {
    color: ${({ theme: { colors } }) => colors.text};
  }
  .contact-header-1 {
    position: absolute;
    top: 13vh;
    left: 10vw;
    transform: rotate(-35deg);
    h2 {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
      position: relative;
      overflow: hidden;
      :after {
        content: '';
        position: absolute;
        display: block;
        left: -100%;
        bottom: 0;
        height: 4px;
        width: 100%;
        background-color: ${({ theme: { colors } }) => colors.orange};
        animation: headingUnderlineAnimation 3s ease-in-out infinite;
      }
    }
  }
  .contact-header-2 {
    position: absolute;
    left: 20vw;
    top: 30vh;
    z-index: 1;
    h1 {
      font-size: ${({ theme: { fontSize } }) => fontSize.xl};
      span {
        display: inline-block;
      }
      .at-span {
        color: ${({ theme: { colors } }) => colors.orange};
        padding-left: 50px;
        transform-origin: center;
        animation: mailSignRotate 3s ease-out infinite;
      }
      #span-1 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 1);
      }
      #span-2 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 1.4);
      }
      #span-3 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 1.6);
      }
      #span-4 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 1.8);
      }
      #span-5 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 2);
      }
      #span-6 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 2.2);
      }
      #span-7 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 2.4);
      }
      #span-8 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 2.6);
      }
      #span-9 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 2.8);
      }
      #span-10 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 3);
      }
      #span-11 {
        animation: lettersAnimation 1s 1 linear;
        animation-delay: calc(0.2s * 3.2);
      }
    }
  }
  .contact-image {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .contact-image-mobile {
    display: none;
  }
  #white-env {
    animation: white-env 3s ease-in-out infinite;
    transform-origin: bottom left;
    transform-box: fill-box;
  }
  #orange-env {
    animation: orange-env 3s ease-in-out infinite;
    transform-origin: bottom left;
    transform-box: fill-box;
  }
  /* TODO: check why does only last @media query applies */
  @media screen and (max-width: 1000px), screen and (max-height: 450px) {
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    .contact-header-1 {
      transform: rotate(0);
      left: 10vw;
      top: 15vh;
      h2 {
        color: #fff;
        font-size: ${({ theme: { fontSize } }) => fontSize.m};
        border-bottom: 1px solid ${({ theme: { colors } }) => colors.orange};
        ::after {
          animation: none;
        }
      }
    }
    .contact-header-2 {
      top: 20vh;
      h1 {
        font-size: ${({ theme: { fontSize } }) => fontSize.lm};
      }
    }
    .contact-image {
      display: none;
    }
    .contact-image-mobile {
      display: block;
    }
  }
  @media (orientation: landscape) and (max-width: 1000px) and (max-height: 450px) {
    .contact-header-1 {
      top: 30vh;
      left: 55vw;
    }
    .contact-header-2 {
      top: 40vh;
      left: 60vw;
    }
    .contact-image-mobile {
      transform: scale(0.5);
    }
  }
  @keyframes white-env {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes orange-env {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes mailSignRotate {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes lettersAnimation {
    0%,
    80% {
      transform: rotateY(360deg);
    }
  }
  @keyframes headingUnderlineAnimation {
    0% {
      left: -100%;
    }
    50% {
      left: 0;
    }
    100% {
      left: -100%;
    }
  }
`;
