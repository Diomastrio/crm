import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProducto } from "../../services/apiProductos";
export function useCreateProducto() {
  const queryClient = useQueryClient();

  const { mutate: createProducto, isLoading: isCreating } = useMutation({
    mutationFn: createEditProducto,
    onSuccess: () => {
      toast.success("Nuevo producto exitosamente creado");

      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProducto };
}
