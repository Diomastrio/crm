import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditDiplomados } from "../../services/apiDiplomados.js";
import { toast } from "react-hot-toast";

export function useEditDiplomado() {
  const queryClient = useQueryClient();

  const { mutate: editDiplomado, isLoading: isEditing } = useMutation({
    mutationFn: ({ newDiplomado, id }) =>
      createEditDiplomados(newDiplomado, id),
    onSuccess: () => {
      toast.success("Diplomado exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["diplomado"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editDiplomado };
}
