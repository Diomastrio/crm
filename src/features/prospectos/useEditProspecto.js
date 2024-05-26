import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditProspecto } from "../../services/apiProspectos.js";
import { toast } from "react-hot-toast";

export function useEditProspecto() {
  const queryClient = useQueryClient();

  const { mutate: editProspecto, isLoading: isEditing } = useMutation({
    mutationFn: ({ newProspecto, id }) =>
      createEditProspecto(newProspecto, id),
    onSuccess: () => {
      toast.success("Prospecto exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["prospecto"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editProspecto };
}
