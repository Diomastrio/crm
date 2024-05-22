import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProducto } from "../../services/apiProductos";
import { toast } from "react-hot-toast";

export function useEditProducto() {
  const queryClient = useQueryClient();

  const { mutate: editProducto, isLoading: isEditing } = useMutation({
    mutationFn: ({ newProductoData, id }) =>
      createEditProducto(newProductoData, id),
    onSuccess: () => {
      toast.success("Producto exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editProducto };
}
