import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProspecto } from "../../services/apiProspectos.js";

export function useEditProspecto() {
  const queryClient = useQueryClient();

  const { mutate: editProspecto, isLoading: isEditing } = useMutation({
    mutationFn: ({ newProspecto, id }) =>
      createEditProspecto(newProspecto, id),
    onSuccess: () => {
      toast.success("Prospecto exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["prospectos"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editProspecto };
}
