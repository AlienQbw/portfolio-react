import styled from 'styled-components';

export const Wrapper = styled.div`
  h1,
  h2 {
    color: ${({ theme: { colors } }) => colors.text};
  }
  .contact-header-1 {
    position: absolute;
    top: 10vh;
    left: 10vw;
    transform: rotate(-35deg);
    h2 {
      font-size: ${({ theme: { fontSize } }) => fontSize.l};
    }
  }
  .contact-header-2 {
    position: absolute;
    left: 20vw;
    top: 30vh;
    z-index: 99;
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
`;
