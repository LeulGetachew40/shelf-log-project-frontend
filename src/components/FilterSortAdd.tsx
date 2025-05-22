import { styled } from "styled-components";
import Filter from "./Filter";
import AddBook from "./AddBookButton";

const FilterSortAdd = () => {
  const FilterSortAdd = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 2rem;
    margin-block: 2rem;
  `;

  return (
    <FilterSortAdd>
      <AddBook />
      <div>
        <Filter
          filterParam="status"
          options={[
            { filterName: "All", filterValue: "all" },
            { filterName: "To Read", filterValue: "toRead" },
            { filterName: "Reading", filterValue: "reading" },
            { filterName: "Completed", filterValue: "completed" },
          ]}
        />
      </div>
    </FilterSortAdd>
  );
};

export default FilterSortAdd;
