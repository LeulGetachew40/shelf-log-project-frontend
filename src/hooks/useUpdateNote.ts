import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editNote } from "../services/apiNotes";
import { useParams } from "react-router-dom";

const useUpdateNote = () => {
  const queryClient = useQueryClient();
  const params = useParams();

  const {
    mutateAsync: editNoteAsync,
    error,
    isPending,
  } = useMutation({
    mutationKey: ["note", params.bookId],
    mutationFn: editNote,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return { editNoteAsync, error, isPending };
};

export default useUpdateNote;
