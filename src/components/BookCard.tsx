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
    background-color: white;
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-sm);
    padding: var(--space-6);
    transition: transform var(--transition-normal),
      box-shadow var(--transition-normal);

    &:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
    }
  `;

  const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: var(--space-4);
  `;

  const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--color-neutral-900);
    margin-right: var(--space-2);
  `;

  const Status = styled.div<StatusProps>`
    font-size: 0.875rem;
    font-weight: 600;
    padding: var(--space-1) var(--space-2);
    border-radius: var(--radius-sm);
    text-align: center;
    min-width: 80px;
    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  const Author = styled.p`
    margin-bottom: var(--space-4);
    font-size: 0.875rem;

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
    gap: var(--space-2);
  `;
  const StatusButton = styled.button<StatusProps>`
    font-size: 0.75rem;
    padding: var(--space-1) var(--space-2);
    border: none;
    border-radius: var(--radius-sm);
    cursor: pointer;
    transition: opacity var(--transition-fast);
    ${({ readStatus }) => statusStyles[readStatus]}

    ${({ readStatus: readStatusOnButton }) =>
      readStatus === readStatusOnButton
        ? css`
            opacity: 1;
          `
        : css`
            opacity: 0.7;
          `}

    & :hover {
      opacity: 0.8;
    }
  `;

  const StyledButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.25rem;
    transition: color var(--transition-fast);
  `;

  const ViewOrDeleteButtons = styled.div`
    display: flex;
    gap: var(--space-2);
  `;

  const DeleteBook = styled(StyledButton)`
    & :hover {
      color: var(--color-error-500);
    }
  `;
  const ShowBookDetail = styled(StyledButton)`
    & :hover {
      color: var(--color-primary-500);
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
        <ViewOrDeleteButtons>
          <ShowBookDetail onClick={() => navigate(`/books/${id}`)}>
            <MdOutlineRemoveRedEye />
          </ShowBookDetail>
          <DeleteBook
            onClick={() => deleteBookAsync(id)}
            disabled={deletingBook}
          >
            <CiTrash />
          </DeleteBook>
        </ViewOrDeleteButtons>
      </CardFooter>
    </StyledCardContainer>
  );
};

export default BookCard;
