import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProducto as deleteProductoApi } from "../../services/apiMarcador";

export function useDeleteProducto() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProducto } = useMutation({
    mutationFn: deleteProductoApi,
    onSuccess: () => {
      toast.success("Marcador existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["productos"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProducto };
}
