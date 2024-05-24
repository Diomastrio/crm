import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProducto as deleteProductoApi } from "../../services/apiClientes.js";

export function useDeleteCliente() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProducto } = useMutation({
    mutationFn: deleteProductoApi,
    onSuccess: () => {
      toast.success("Cliente existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["cliente"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProducto };
}
