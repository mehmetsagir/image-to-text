import { useEffect, useRef } from "react";
import styled from "styled-components";

const AutoTextArea = ({ onChange, value, ...props }) => {
  const textAreaRef = useRef(null);

  const calcHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      const { scrollHeight } = textAreaRef.current;
      textAreaRef.current.style.height = `${scrollHeight}px`;
    }
  };

  const onChangeHandler = (event) => {
    calcHeight();
    onChange?.(event);
  };

  useEffect(() => {
    calcHeight();
  }, [value]);

  return (
    <TextArea
      ref={(n) => {
        textAreaRef.current = n;
      }}
      value={value}
      rows={1}
      onChange={onChangeHandler}
      style={{
        overflowWrap: "break-word",
        minHeight: 120,
      }}
      {...props}
    />
  );
};

const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid var(--color-primary-hover);
  border-radius: 5px;
  background: var(--color-primary);
  resize: none;
  padding: 15px;
  font-size: 15px;
  max-height: 400px;
  color: var(--color-text);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export default AutoTextArea;
