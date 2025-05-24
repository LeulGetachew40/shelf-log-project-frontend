import { styled } from "styled-components";
import useSingleBook from "../hooks/useSingleBook";
import type { StatusProps } from "./../styles/statusStyles";
import { statusStyles, readStatusMap } from "./../styles/statusStyles";
import { Categories, Category } from "../styles/categoriesStyles";
import { IoMdAdd, IoIosRemove } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import Spinner from "./Spinner";
import useCreateNote from "../hooks/useCreateNote";
import { useForm } from "react-hook-form";
import useNotes from "../hooks/useNotes";
import useDeleteNote from "../hooks/useDeleteNote";
import NoteForm from "./NoteForm";
import useUpdateNote from "../hooks/useUpdateNote";
import { MdEdit } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import { ConfirmEditButton } from "../styles/formButtons";

const BookDetail = () => {
  const StyledBookDetail = styled.div`
    border: 1px solid var(--color-border-grey-300);
    border-radius: 5px;
    padding: 3rem;
    display: flex;
    flex-direction: column;

    & > div {
      display: flex;
      justify-content: space-between;
    }
  `;
  const ContainerHeader = styled.div`
    border: 1px solid var(--color-border-grey-300);
    border-radius: 5px;
    padding: 3rem;
    background-color: var(--color-bookcard-background-grey-50);
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

  const NoteContent = styled.div`
    margin-block: 2.5rem;
    padding: 2rem;
    padding-top: 1rem;
    background-color: var(--color-accent-100);

    & > h5 {
      margin-bottom: 1rem;
    }
  `;

  const NotesHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > button {
      background: none;
      border: none;
      & > svg {
        font-size: 3rem;
      }
    }
  `;

  const NoteHeader = styled.div`
    display: flex;
    justify-content: space-between;
    & > div {
      & > button {
        background: none;
        border: none;
        /* color: red; */
        cursor: pointer;
        font-size: 1.5rem;
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

  const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
  `;

  const { book, bookLoading } = useSingleBook();
  const { createNoteAsync, creatingNote } = useCreateNote();

  const { author, categories, readStatus, title, description, id } = book || {};
  const { notes } = useNotes();
  const [showAddNotesForm, setShowAddNotesForm] = useState(false);
  const [showEditNotesForm, setShowEditNotesForm] = useState(false);
  const [editedNoteId, setEditedNoteId] = useState<number | null>(null);
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<{ content: string }>();

  const { deleteNoteAsync, isPending: deletingNote } = useDeleteNote();
  const { isPending: editingNote } = useUpdateNote();

  const [editedNote, setEditedNote] = useState<string>();

  console.log(editedNote);

  function hideEditForm() {
    setShowEditNotesForm(false);
    setEditedNoteId(null);
  }

  if (bookLoading || !book)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  return (
    <>
      <GoBackLink>
        <button onClick={() => navigate("/books")}>
          <FaChevronLeft />
          Go back
        </button>
      </GoBackLink>
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
              {(notes || [])?.map((note) => {
                return (
                  <>
                    <NoteContent>
                      <NoteHeader>
                        <h5>{note.createdAt.split("T")[0]}</h5>
                        <div>
                          {editedNoteId === note.id || (
                            <button
                              onClick={() => {
                                setEditedNoteId(note.id);
                                setShowEditNotesForm(true);
                                setEditedNote(note.content);
                              }}
                              disabled={editingNote}
                            >
                              <MdEdit />
                            </button>
                          )}
                          <button
                            onClick={async () => {
                              if (id)
                                await deleteNoteAsync({
                                  bookId: id,
                                  noteId: note.id,
                                });
                            }}
                            disabled={deletingNote || editingNote}
                          >
                            <CiTrash />
                          </button>
                        </div>
                      </NoteHeader>
                      <p>{note.content}</p>
                    </NoteContent>
                    {showEditNotesForm && editedNoteId === note.id && id && (
                      <NoteForm
                        formMode="editNote"
                        hideEditForm={hideEditForm}
                        noteContent={note.content}
                        bookId={id}
                        noteId={note.id}
                      />
                    )}
                  </>
                );
              })}
            </div>
          </Notes>
        </BookDetailDescription>
      </StyledBookDetail>
    </>
  );
};

export default BookDetail;
