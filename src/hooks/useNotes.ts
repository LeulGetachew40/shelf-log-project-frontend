import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getNotesByBookId } from "../services/apiNotes";

const useNotes = () => {
  const { bookId } = useParams();
  const {
    data: notes,
    error,
    isLoading: notesLoading,
  } = useQuery({
    queryKey: ["notes", bookId],
    queryFn() {
      if (bookId === undefined) {
        throw new Error("No book id available");
      }
      return getNotesByBookId(+bookId);
    },
  });

  return {
    notes,
    error,
    notesLoading,
  };
};

export default useNotes;
