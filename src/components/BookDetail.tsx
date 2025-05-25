import { styled } from "styled-components";
import useSingleBook from "../hooks/useSingleBook";
import type { StatusProps } from "./../styles/statusStyles";
import { statusStyles, readStatusMap } from "./../styles/statusStyles";
import { Categories, Category } from "../styles/categoriesStyles";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import useCreateNote from "../hooks/useCreateNote";
import { useForm } from "react-hook-form";
import useNotes from "../hooks/useNotes";
import { ConfirmEditButton } from "../styles/formButtons";
import Loader from "./Loader";
import EmptyList from "./EmptyList";
import Note from "./Note";

const BookDetail = () => {
  const StyledBookDetail = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `;
  const ContainerHeader = styled.div`
    border-radius: 5px;
    padding-bottom: 3rem;
  `;

  const Author = styled.p`
    & > span {
      font-weight: bold;
    }
  `;

  const ReadStatus = styled.div<StatusProps>`
    padding: 0.5rem;
    border-radius: 5px;
    ${({ readStatus }) => statusStyles[readStatus]}
  `;

  const BookDetailDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
  `;

  const Description = styled.div`
    & > h1 {
      margin-bottom: 1rem;
    }
  `;

  const Notes = styled.div``;

  const NotesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > button {
      background: none;
      border: none;
      cursor: pointer;
      & > svg {
        font-size: 3rem;
      }
    }
  `;

  const NotesForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--color-neutral-200);
    padding: 2rem;
    margin-block: 2rem;
    & > textarea {
      font-size: 1.5rem;
    }
  `;

  const GoBackLink = styled.div`
    display: flex;
    justify-content: end;
    margin-block: 2rem;

    & > button {
      padding: 0.5rem;
      background-color: var(--color-accent-300);
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  const { book, bookLoading, error } = useSingleBook();
  const { createNoteAsync, creatingNote } = useCreateNote();

  const { author, categories, readStatus, title, description, id } = book || {};
  const { notes } = useNotes();
  const [showAddNotesForm, setShowAddNotesForm] = useState(false);
  const { handleSubmit, register, reset } = useForm<{ content: string }>();
  const navigate = useNavigate();

  if (bookLoading) return <Loader />;

  return (
    <>
      <GoBackLink>
        <button onClick={() => navigate("/books")}>
          <FaChevronLeft />
          Go back
        </button>
      </GoBackLink>
      {error ? (
        <EmptyList errorMessage={error.message}></EmptyList>
      ) : (
        <StyledBookDetail>
          <ContainerHeader>
            <div>
              <h1>{title}</h1>
              <Author>
                by <span>{author}</span>
              </Author>
            </div>
            <div>
              <ReadStatus readStatus={readStatus || "toRead"}>
                {readStatusMap[readStatus || "toRead"]}
              </ReadStatus>
            </div>
          </ContainerHeader>
          <BookDetailDescription>
            <Categories>
              {(categories || []).map((category) => (
                <Category>{category}</Category>
              ))}
            </Categories>
            <Description>
              <h1>Description</h1>
              <p>{description}</p>
            </Description>
            <Notes>
              <NotesHeader>
                <h1>Notes ({(notes || []).length})</h1>
                <button
                  onClick={() => {
                    setShowAddNotesForm((prevState) => !prevState);
                  }}
                >
                  {showAddNotesForm ? <IoIosRemove /> : <IoMdAdd />}
                </button>
              </NotesHeader>
              {showAddNotesForm && (
                <NotesForm
                  onSubmit={handleSubmit(
                    async ({ content }: { content: string }) => {
                      if (!id) throw new Error("Book Id unavailable");
                      await createNoteAsync({ content, bookId: id });
                      reset();
                      return setShowAddNotesForm(false);
                    }
                  )}
                >
                  <label htmlFor="note">Tell us your story:</label>

                  <textarea
                    id="note"
                    rows={5}
                    cols={33}
                    placeholder="tell us what you found interesting today..."
                    {...register("content")}
                  />
                  <ConfirmEditButton type="submit" disabled={creatingNote}>
                    Add Note
                  </ConfirmEditButton>
                </NotesForm>
              )}
              <div>
                {notes?.length !== 0 &&
                  id &&
                  notes?.map((note) => {
                    return <Note bookId={id} note={note} />;
                  })}
              </div>
            </Notes>
          </BookDetailDescription>
        </StyledBookDetail>
      )}
    </>
  );
};

export default BookDetail;
