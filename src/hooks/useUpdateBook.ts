import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBookStatus } from "../services/apiBooks";

const useUpdateBook = () => {
  const queryClient = useQueryClient();
  const {
    mutateAsync: updateBookAsync,
    error,
    isPending,
  } = useMutation({
    mutationKey: ["book"],
    mutationFn: updateBookStatus,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["books"] });
    },
  });

  return { updateBookAsync, error, isPending };
};

export default useUpdateBook;
