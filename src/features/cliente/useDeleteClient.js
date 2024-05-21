import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCliente as deleteClienteApi } from "../../services/apiClient";

export function useDeleteClient() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteClient } = useMutation({
    mutationFn: deleteClienteApi,
    onSuccess: () => {
      toast.success("Cliente existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["cliente"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteClient };
}
