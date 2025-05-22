import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBookById } from "../services/apiBooks";

const useSingleBook = () => {
  const { bookId } = useParams();

  const {
    data: book,
    error,
    isLoading: bookLoading,
  } = useQuery({
    queryKey: ["book", bookId],
    queryFn() {
      if (bookId === undefined) {
        throw new Error("No book id available");
      }
      return getBookById(+bookId);
    },
  });
  return { book, error, bookLoading };
};

export default useSingleBook;
