import { styled } from "styled-components";

import { BiError } from "react-icons/bi";

const FilterError = ({ errorMessage }: { errorMessage: string }) => {
  const StyledFilterError = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    & > svg {
      font-size: 4rem;
      color: var(--color-error-500);
    }
  `;
  return (
    <StyledFilterError>
      <BiError />
      <span>{errorMessage}</span>
    </StyledFilterError>
  );
};

export default FilterError;
