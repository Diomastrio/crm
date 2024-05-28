import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCliente as deleteClienteApi } from "../../services/apiClientes.js";

export function useDeleteCliente() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCliente } = useMutation({
    mutationFn: deleteClienteApi,
    onSuccess: () => {
      toast.success("Cliente existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["cliente"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCliente };
}
