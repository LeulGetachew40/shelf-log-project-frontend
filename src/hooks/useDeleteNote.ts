import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "../services/apiNotes";

const useDeleteNote = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteNoteAsync, isPending } = useMutation({
    mutationKey: ["note"],
    mutationFn: deleteNote,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
    },
  });

  return { deleteNoteAsync, isPending };
};

export default useDeleteNote;
