import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditProspecto } from "../../services/apiProspectos.js";

export function useCreateProspecto() {
  const queryClient = useQueryClient();

  const { mutate: createProspecto, isLoading: isCreating } = useMutation({
    mutationFn: createEditProspecto,
    onSuccess: () => {
      toast.success("Registro Exitosamente creado");

      queryClient.invalidateQueries({ queryKey: ["prospecto"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createProspecto };
}
