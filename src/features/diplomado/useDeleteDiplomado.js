import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteDiplomados as deleteDiplomadoApi } from "../../services/apiDiplomados.js";

export function useDeleteDiplomado() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDiplomado } = useMutation({
    mutationFn: deleteDiplomadoApi,
    onSuccess: () => {
      toast.success("Diplomado existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["diplomados"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteDiplomado};
}
