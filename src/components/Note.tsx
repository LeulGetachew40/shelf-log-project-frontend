import { styled } from "styled-components";
import type { noteType } from "../services/apiNotes";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { CiTrash } from "react-icons/ci";
import NoteForm from "./NoteForm";
import useDeleteNote from "../hooks/useDeleteNote";
import useUpdateNote from "../hooks/useUpdateNote";
const Note = ({ note, bookId }: { note: noteType; bookId: number }) => {
  const NoteContent = styled.div`
    margin-block: 2.5rem;
    padding: 2rem;
    padding-top: 1rem;
    background-color: var(--color-accent-100);

    & > h5 {
      margin-bottom: 1rem;
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

  const [editedNoteId, setEditedNoteId] = useState<number | null>(null);
  const [showEditNotesForm, setShowEditNotesForm] = useState(false);
  const [editedNote, setEditedNote] = useState<string>("");
  const { deleteNoteAsync, isPending: deletingNote } = useDeleteNote();
  const { isPending: editingNote } = useUpdateNote();
  function hideEditForm() {
    setShowEditNotesForm(false);
    setEditedNoteId(null);
  }
  return (
    <>
      <NoteContent>
        <NoteHeader>
          <h5>
            {new Date(note.createdAt).toDateString()} (
            {new Date(note.createdAt).toLocaleTimeString()})
          </h5>
          <div>
            {editedNoteId === note.id || (
              <button
                onClick={() => {
                  setEditedNoteId(note.id);
                  setShowEditNotesForm(true);
                  setEditedNote(note.content);
                }}
                disabled={deletingNote || editingNote}
              >
                <MdEdit />
              </button>
            )}
            <button
              onClick={async () => {
                if (bookId)
                  await deleteNoteAsync({
                    bookId: bookId,
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
      {showEditNotesForm && editedNoteId === note.id && bookId && (
        <NoteForm
          formMode="editNote"
          hideEditForm={hideEditForm}
          noteContent={editedNote}
          bookId={bookId}
          noteId={note.id}
        />
      )}
    </>
  );
};

export default Note;
