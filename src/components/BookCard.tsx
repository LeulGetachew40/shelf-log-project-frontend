import { styled } from "styled-components";
import { CiTrash } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  readStatusMap,
  statusStyles,
  type StatusProps,
} from "../styles/statusStyles";
import { Categories, Category } from "../styles/categoriesStyles";
import useUpdateBook from "../hooks/useUpdateBook";
import Spinner from "./Spinner";
import useDeleteBook from "../hooks/useDeleteBook";

const BookCard = ({
  id,
  title,
  author,
  categories,
  readStatus,
}: {
  id: number;
  title: string;
  readStatus: "toRead" | "reading" | "completed";
  author: string;
  categories: string[];
}) => {
  const StyledCardContainer = styled.div`
    border: 1px solid var(--color-border-grey-300);
    border-radius: 5px;
    background-color: var(--color-bookcard-background-grey-50);

    padding: 2rem;

    display: flex;
    flex-direction: column;
  `;

  const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1rem;
    margin-bottom: 0.5rem;
  `;

  const Title = styled.h3``;

  const Status = styled.div<StatusProps>`
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    width: 25%;
    border: 1px solid var(--color-border-grey-300);
    border-radius: 5px;
    padding: 0.25rem;
    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  const Author = styled.p`
    margin-bottom: 0.5rem;

    & > span {
      font-weight: 600;
    }
  `;

  const CardFooter = styled.div`
    display: flex;
    justify-content: space-between;
  `;

  const ChangeReadStatus = styled.div`
    display: flex;
    gap: 1rem;
  `;
  const StatusButton = styled.button<StatusProps>`
    border-radius: 5px;
    border: 0px;
    color: #333333;
    font-weight: 500;
    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  const StyledButton = styled.button`
    height: 2rem;
    width: 3rem;
    background: none;
    border: none;
    & > svg {
      font-size: 1.5rem;
    }
  `;
  const DeleteBook = styled(StyledButton)`
    & :hover {
      color: red;
    }
  `;
  const ShowBookDetail = styled(StyledButton)`
    & :hover {
      color: deepskyblue;
    }
  `;

  const navigate = useNavigate();
  const { updateBookAsync, isPending: udpatingBook } = useUpdateBook();
  const { deleteBookAsync, isPending: deletingBook } = useDeleteBook();

  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledCardContainer>
      <CardHeader>
        <Title>{title}</Title>
        <Status readStatus={readStatus}>{readStatusMap[readStatus]}</Status>
      </CardHeader>
      <Author>
        by <span>{author}</span>
      </Author>
      <Categories>
        {categories.map((category) => (
          <Category>{category}</Category>
        ))}
      </Categories>
      <CardFooter>
        <ChangeReadStatus>
          {udpatingBook ? (
            <SpinnerContainer>
              <Spinner />
            </SpinnerContainer>
          ) : (
            <>
              <StatusButton
                readStatus="toRead"
                onClick={async () =>
                  await updateBookAsync({ bookId: id, readStatus: "toRead" })
                }
              >
                To Read
              </StatusButton>
              <StatusButton
                readStatus="reading"
                onClick={async () =>
                  await updateBookAsync({ bookId: id, readStatus: "reading" })
                }
              >
                Reading
              </StatusButton>
              <StatusButton
                readStatus="completed"
                onClick={async () =>
                  await updateBookAsync({ bookId: id, readStatus: "completed" })
                }
              >
                Completed
              </StatusButton>
            </>
          )}
        </ChangeReadStatus>
        <div>
          <ShowBookDetail onClick={() => navigate(`/books/${id}`)}>
            <MdOutlineRemoveRedEye />
          </ShowBookDetail>
          <DeleteBook
            onClick={() => deleteBookAsync(id)}
            disabled={deletingBook}
          >
            <CiTrash />
          </DeleteBook>
        </div>
      </CardFooter>
    </StyledCardContainer>
  );
};

export default BookCard;
