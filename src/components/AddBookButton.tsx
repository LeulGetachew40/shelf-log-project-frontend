import { IoMdAdd } from "react-icons/io";
import { styled } from "styled-components";
import { useShowAddBookForm } from "../contexts/ShowAddBookContext";

const AddBookButton = () => {
  const AddBookDiv = styled.div`
    & > button {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      background-color: var(--color-primary-500);
      color: white;
      border: none;
      border-radius: var(--radius-md);
      padding: var(--space-3) var(--space-5);
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color var(--transition-fast),
        transform var(--transition-fast);
    }

    & > button:hover {
      background-color: var(--color-primary-600);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
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
