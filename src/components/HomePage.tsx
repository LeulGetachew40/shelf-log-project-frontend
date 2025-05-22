import { useShowAddBookForm } from "../contexts/ShowAddBookContext";
import AddBookForm from "./AddBookForm";
import BookList from "./BookList";
import FilterSortAdd from "./FilterSortAdd";

const HomePage = () => {
  const { showForm } = useShowAddBookForm();
  return (
    <>
      <FilterSortAdd />
      {showForm && <AddBookForm />}

      <BookList />
    </>
  );
};

export default HomePage;
