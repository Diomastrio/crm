import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCliente } from "../../services/apiClientes.js";

export function useCreateCliente() {
  const queryClient = useQueryClient();

  const { mutate: createCliente, isLoading: isCreating } = useMutation({
    mutationFn: createEditCliente,
    onSuccess: () => {
      toast.success("Nuevo Cliente exitosamente creado");

      queryClient.invalidateQueries({ queryKey: ["cliente"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCliente };
}
