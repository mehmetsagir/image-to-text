import Image from "next/image";
import styled from "styled-components";

const Button = ({ src, alt, ...props }) => {
  return (
    <ButtonStyles {...props}>
      <Image src={src} alt={alt} width="14" height="14" />
    </ButtonStyles>
  );
};

const ButtonStyles = styled.button`
  background: var(--color-primary);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: 200ms;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: var(--color-primary-hover);
  }
`;

export default Button;
