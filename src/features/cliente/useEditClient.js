import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCliente } from "../../services/apiClient";
import { toast } from "react-hot-toast";

export function useEditCliente() {
  const queryClient = useQueryClient();

  const { mutate: editCliente, isLoading: isEditing } = useMutation({
    mutationFn: ({ newClientData, id }) => createEditCliente(newClientData, id),
    onSuccess: () => {
      toast.success("Cliente exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["cliente"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editCliente };
}
