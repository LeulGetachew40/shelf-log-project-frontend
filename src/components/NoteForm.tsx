import { useForm } from "react-hook-form";
import { styled } from "styled-components";
import useUpdateNote from "../hooks/useUpdateNote";

const NoteForm = ({
  formMode,
  hideEditForm,
  noteContent,
  bookId,
  noteId,
}: {
  formMode: string;
  hideEditForm: () => void;
  noteContent: string;
  bookId: number;
  noteId: number;
}) => {
  const StyledNoteForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > button {
      padding-block: 1rem;
    }
    & > textarea {
      padding: 1rem;
      font-size: 1.5rem;
    }
  `;
  const { register, handleSubmit } = useForm<{ content: string }>({
    defaultValues: { content: noteContent },
  });

  const { editNoteAsync } = useUpdateNote();
  async function onSubmit({ content }: { content: string }) {
    await editNoteAsync({ content, bookId, noteId });
    hideEditForm();
  }
  return (
    <StyledNoteForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={formMode}></label>
      <textarea
        rows={5}
        cols={50}
        id={formMode}
        {...register("content")}
      ></textarea>
      <button onClick={() => hideEditForm()}>Cancel</button>
      <button type="submit">Edit Note</button>
    </StyledNoteForm>
  );
};

export default NoteForm;
