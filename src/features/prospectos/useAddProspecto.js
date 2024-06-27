import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProspecto as deleteProspectoApi } from "../../services/apiProspectos.js";

export function useAddProspecto() {
  const queryClient = useQueryClient();

  const { isLoading: isAdding, mutate: addProspecto } = useMutation({
    mutationFn: deleteProspectoApi,
    onSuccess: () => {
      toast.success("Prospecto existosamente añadido");

      queryClient.invalidateQueries({
        queryKey: ["prospectos"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isAdding, addProspecto };
}
