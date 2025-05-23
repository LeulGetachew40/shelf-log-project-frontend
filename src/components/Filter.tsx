import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-2);

  @media (min-width: 768px) {
    & {
      justify-content: flex-end;
    }
  }
`;

const StyledFilterButton = styled.button<{ active: string }>`
  background-color: var(--color-neutral-300);
  border: none;
  border-radius: var(--radius-md);
  padding: var(--space-2) var(--space-4);
  font-weight: 500;
  cursor: pointer;
  transition: background-color var(--transition-fast),
    color var(--transition-fast);
  ${(props) =>
    props.active === "true" &&
    css`
      background-color: var(--color-primary-500);
      color: var(--color-neutral-50);
    `}

  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-primary-500);
    color: var(--color-brand-50);
    cursor: pointer;
  }
`;
const Filter = ({
  filterParam,
  options,
}: {
  filterParam: string;
  options: { filterValue: string; filterName: string }[];
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleClick(value: string) {
    if (searchParams.get("page")) searchParams.set("page", "1");
    searchParams.set(filterParam, value);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {options.map(({ filterValue, filterName }) => {
        return (
          <StyledFilterButton
            onClick={() => handleClick(filterValue)}
            active={(searchParams.get(filterParam) === filterValue).toString()}
            key={filterValue}
          >
            {filterName}
          </StyledFilterButton>
        );
      })}
    </StyledFilter>
  );
};

export default Filter;
