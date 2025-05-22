import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "../services/apiBooks";

const useCreateBook = () => {
  const queryClient = useQueryClient();

  const {
    mutateAsync: createBookAsync,
    isPending: creatingBook,
    error,
  } = useMutation({
    mutationFn: createBook,
    mutationKey: ["book"],
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ["books"],
      });
    },
  });

  return { createBookAsync, creatingBook, error };
};

export default useCreateBook;
