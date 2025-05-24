import { styled } from "styled-components";
import Spinner from "./Spinner";

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  padding-top: 4rem;
`;

const Loader = () => {
  return (
    <SpinnerContainer>
      <Spinner /> Loading. Please wait...
    </SpinnerContainer>
  );
};

export default Loader;
