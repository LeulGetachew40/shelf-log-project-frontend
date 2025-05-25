import { styled } from "styled-components";
import { useShowAddBookForm } from "../contexts/ShowAddBookContext";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";
import FilterSortAdd from "./FilterSortAdd";

const HomePage = () => {
  const { showForm } = useShowAddBookForm();

  const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
    margin: var(--space-6) 0;
  `;

  const StyledControls = styled.div`
    @media (min-width: 576px) {
      & {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  `;

  return (
    <StyledSection>
      <FilterSortAdd />
      <StyledControls>{showForm && <AddBookForm />}</StyledControls>
      {!showForm && <BookList />}
    </StyledSection>
  );
};

export default HomePage;
