import { IoMdAdd } from "react-icons/io";
import { styled } from "styled-components";
import { useShowAddBookForm } from "../contexts/ShowAddBookContext";

const AddBookButton = () => {
  const AddBookDiv = styled.div`
    & > button {
      padding: 0.5rem;
      background-color: var(--color-filter-button-grey-500);
      border: none;
      cursor: pointer;
      border-radius: 5px;
      color: white;
    }
  `;

  const { toggleShowForm, showForm } = useShowAddBookForm();
  return (
    <AddBookDiv>
      <button onClick={() => toggleShowForm()}>
        {!showForm ? (
          <>
            <IoMdAdd /> Add Book
          </>
        ) : (
          "Close Form"
        )}
      </button>
    </AddBookDiv>
  );
};

export default AddBookButton;
