import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCliente } from "../../services/apiClientes.js";
import { toast } from "react-hot-toast";

export function useEditCliente() {
  const queryClient = useQueryClient();

  const { mutate: editCliente, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCliente, id }) =>
      createEditCliente(newCliente, id),
    onSuccess: () => {
      toast.success("Cliente exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["clientes"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCliente };
}
