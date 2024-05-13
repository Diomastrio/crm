import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditCliente } from "../../services/apiClient";
export function useCreateCliente() {
  const queryClient = useQueryClient();

  const { mutate: createCliente, isLoading: isCreating } = useMutation({
    mutationFn: createEditCliente,
    onSuccess: () => {
      toast.success("Nuevo cliente exitosamente agregado");

      queryClient.invalidateQueries({ queryKey: ["cliente"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCliente };
}
