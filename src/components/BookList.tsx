import { styled } from "styled-components";
import BookCard from "./BookCard";
import EmptyList from "./EmptyList";
import useBooks from "../hooks/useBooks";
import useFilterBooks from "../hooks/useFilterBooks";
import Loader from "./Loader";
import FilterError from "./FilterError";

const BookList = () => {
  const { books, booksLoading } = useBooks();

  const { error, filterBooks } = useFilterBooks(books || []);

  const StyledBookList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-6);
    margin-bottom: var(--space-8);

    @media (min-width: 768px) {
      & {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 992px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media (min-width: 1200px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  if (booksLoading) return <Loader />;

  if (error && filterBooks === null)
    return <FilterError errorMessage={error.message} />;

  if (filterBooks.length === 0) return <EmptyList />;

  return (
    <StyledBookList>
      {(filterBooks || []).map(
        ({ author, categories, readStatus, title, id }) => (
          <BookCard
            id={id}
            author={author}
            categories={categories}
            readStatus={readStatus}
            title={title}
          />
        )
      )}
    </StyledBookList>
  );
};

export default BookList;
