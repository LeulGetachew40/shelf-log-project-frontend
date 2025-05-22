import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-bookcard-background-grey-50);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const StyledFilterButton = styled.button<{ active: string }>`
  background-color: var(--color-filter-button-grey-500);
  border: none;
  ${(props) =>
    props.active === "true" &&
    css`
      background-color: var(--color-filter-button-grey-300);
      color: #333;
    `}

  border-radius: 5px;
  font-weight: 500;
  font-size: 1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-filter-button-grey-300);
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
