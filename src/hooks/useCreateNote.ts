import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNote } from "../services/apiNotes";
import { useParams } from "react-router-dom";

const useCreateNote = () => {
  const queryClient = useQueryClient();
  const params = useParams();
  const {
    mutateAsync: createNoteAsync,
    isPending: creatingNote,
    error,
  } = useMutation({
    mutationFn: createNote,
    mutationKey: ["note", params.bookId],
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      });
    },
  });

  return { createNoteAsync, creatingNote, error };
};

export default useCreateNote;
