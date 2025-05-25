import { useSearchParams } from "react-router-dom";
import type { books } from "../services/apiBooks";

const useFilterBooks = (books: books) => {
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get("status") || "all";

  let filterBooks: books | undefined;

  switch (filterValue) {
    case "all":
      filterBooks = books;
      break;
    case "toRead":
      filterBooks = books.filter(({ readStatus }) => {
        return readStatus === "toRead";
      });
      break;
    case "reading":
      filterBooks = books.filter(({ readStatus }) => {
        return readStatus === "reading";
      });
      break;
    case "completed":
      filterBooks = books.filter(({ readStatus }) => {
        return readStatus === "completed";
      });
      break;

    default:
      return { error: new Error("Invalid filter value!"), filterBooks: null };
  }

  return { error: null, filterBooks };
};

export default useFilterBooks;
