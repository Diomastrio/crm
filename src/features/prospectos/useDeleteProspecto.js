import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteProspecto as deleteProspectoApi } from "../../services/apiProspectos.js";

export function useDeleteProspecto() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteProspecto } = useMutation({
    mutationFn: deleteProspectoApi,
    onSuccess: () => {
      toast.success("Prospecto existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["prospecto"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteProspecto };
}
