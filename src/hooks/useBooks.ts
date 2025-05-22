import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../services/apiBooks";

const useBooks = () => {
  const {
    data: books,
    error,
    isLoading: booksLoading,
  } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });

  return {
    books,
    error,
    booksLoading,
  };
};

export default useBooks;
