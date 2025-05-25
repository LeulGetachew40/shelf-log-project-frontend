import { styled } from "styled-components";
import { ImBooks } from "react-icons/im";
const Empty = ({ errorMessage }: { errorMessage?: string }) => {
  const EmptyList = styled.div`
    border-radius: 5px;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.3rem;
    & > svg {
      height: 5rem;
      width: 5rem;
    }
  `;
  return (
    <EmptyList>
      <ImBooks />
      <h3>No Books Found</h3>
      <p>
        {errorMessage ? errorMessage : "Add your first book to get started!"}
      </p>
    </EmptyList>
  );
};

export default Empty;
