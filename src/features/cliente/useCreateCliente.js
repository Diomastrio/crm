import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCliente } from "../../services/apiClientesjs";

export function useCreateProducto() {
  const queryClient = useQueryClient();

  const { mutate: createProducto, isLoading: isCreating } = useMutation({
    mutationFn: createEditCliente,
    onSuccess: () => {
      toast.success("Nuevo cliente exitosamente creado");

      queryClient.invalidateQueries({ queryKey: ["cliente"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProducto };
}
