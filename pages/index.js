import { useState } from "react";
import Tesseract from "tesseract.js";
import styled from "styled-components";
import AutoTextArea from "../components/AutoTextArea";
import Loader from "../components/Loader";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import Button from "../components/Button";

const Home = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSelectFile = (file) => {
    const type = file.type.split("/")[1];
    const acceptTypes = ["png", "jpg", "jpeg"];

    if (!acceptTypes.includes(type)) {
      toast.error("Please select a valid image file");
      return;
    }

    setIsLoading(true);
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImage(fileReader.result);
      toast.success("Image uploaded successfully");
      toast.loading("Transaction in progress");
    };
    fileReader.readAsDataURL(file);

    Tesseract.recognize(file, "eng")
      .then(({ data: { text } }) => {
        setResult(text);
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setIsLoading(false);
        toast.dismiss();
      });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  const RenderItem = () => {
    return image ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={image}
        alt="uploaded-image"
        accept="image/jpeg, image/png, image/jpg"
      />
    ) : (
      <>
        <input
          onChange={(e) => handleSelectFile(e.target.files[0])}
          type="file"
          accept="image/jpeg, image/png"
        />
        <span>Drag and Drop or Click</span>
      </>
    );
  };

  return (
    <Container>
      <Toaster />
      <Wrapper
        isLoading={isLoading}
        style={
          {
            // paddingTop: `${(100 * 400) / 400}%`,
          }
        }
      >
        <div>{isLoading ? <Loader /> : <RenderItem />}</div>
      </Wrapper>
      <div className="actions">
        <Button
          title="Clear"
          disabled={isLoading || !image}
          onClick={() => {
            if (!isLoading) {
              setResult("");
              setImage(null);
            }
          }}
          src="/icons/trash.svg"
          alt="Clear"
        />
        <Button
          disabled={!result || !image}
          onClick={() => {
            if (result?.length) {
              handleCopy();
            }
          }}
          title="Copy"
          src="/icons/copy.svg"
          alt="Copy"
        />
      </div>
      <AutoTextArea
        placeholder="Result..."
        value={result}
        disabled={!result}
        onChange={(e) => setResult(e.target.value)}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  padding: 40px 20px;
  margin: 0 auto;

  .actions {
    margin: 10px 0;
    display: flex;
    justify-content: end;
    gap: 10px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: calc(9 / 20 * 100%);
  border: 1px solid var(--color-primary-hover);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 500px) {
    padding-top: calc(3 / 4 * 100%);
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  span {
    color: var(--color-text);
  }
`;

export default Home;
