import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProducto } from "../../services/apiArticulos";

export function useCreateMarcador() {
  const queryClient = useQueryClient();

  const { mutate: createMarcador, isLoading: isCreating } = useMutation({
    mutationFn: createEditProducto,
    onSuccess: () => {
      toast.success("Nuevo  exitosamente creado");

      queryClient.invalidateQueries({ queryKey: ["productos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createMarcador };
}
