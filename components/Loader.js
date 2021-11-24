import styled from "styled-components";

const Loader = () => {
  return (
    <Container>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  margin-left: 92px;
  span {
    position: absolute;
    width: 6px;
    height: 90px;
    margin-top: -45px;
    border-radius: 10px;
    background-color: var(--color-primary-hover);
    animation: animate 0.8s infinite;
    animation-direction: alternate-reverse;

    &:nth-child(1) {
      margin-left: 0px;
    }
    &:nth-child(2) {
      margin-left: -14px;
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      margin-left: -28px;
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      margin-left: -42px;
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      margin-left: -56px;
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      margin-left: -70px;
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      margin-left: -84px;
      animation-delay: 0.6s;
    }
    &:nth-child(8) {
      margin-left: -98px;
      animation-delay: 0.7s;
    }
  }

  @keyframes animate {
    0% {
      height: 5px;
      margin-top: 0;
      transform: rotate(40deg);
    }
    100% {
      height: 90px;
      transform: rotate(0deg);
    }
  }
`;

export default Loader;
