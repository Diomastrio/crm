import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteDisciplinas as deleteDisciplinasApi } from "../../services/apiCuenta.js";

export function useDeleteDisciplinna() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteDisciplina } = useMutation({
    mutationFn: deleteDisciplinasApi,
    onSuccess: () => {
      toast.success("Cuenta existosamente eliminado");

      queryClient.invalidateQueries({
        queryKey: ["cuentas"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteDisciplina};
}
