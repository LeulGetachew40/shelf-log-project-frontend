import { BiError } from "react-icons/bi";
import { styled } from "styled-components";

const PageNotFound = () => {
  const StyledErrorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;
    & > svg {
      font-size: 4rem;
      color: var(--color-error-500);
    }
  `;

  return (
    <StyledErrorContainer>
      <BiError />
      <span>404 - Page Not Found!</span>
    </StyledErrorContainer>
  );
};

export default PageNotFound;
