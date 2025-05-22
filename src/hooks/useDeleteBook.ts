import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../services/apiBooks";

const useDeleteBook = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteBookAsync, isPending } = useMutation({
    mutationKey: ["book"],
    mutationFn: deleteBook,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return { deleteBookAsync, isPending };
};

export default useDeleteBook;
