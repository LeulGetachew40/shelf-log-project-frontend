import { styled } from "styled-components";
import BookCard from "./BookCard";
import EmptyList from "./EmptyList";
import useBooks from "../hooks/useBooks";
import Spinner from "./Spinner";
import useFilterBooks from "../hooks/useFilterBooks";

const BookList = () => {
  const { books, booksLoading } = useBooks();

  const [filteredBooks] = useFilterBooks(books || []);

  const StyledBookList = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;

    @media (min-width: 768px) {
      & {
        grid-template-columns: repeat(6, 1fr);
      }
    }
    @media (min-width: 1024px) {
      & {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  `;

  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  if (booksLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  if ((filteredBooks || []).length === 0) return <EmptyList />;

  return (
    <StyledBookList>
      {(filteredBooks || []).map(
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
