import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditDisciplinas } from "../../services/apiCuenta.js";
import { toast } from "react-hot-toast";

export function useEditDisciplina() {
  const queryClient = useQueryClient();

  const { mutate: editDisciplina, isLoading: isEditing } = useMutation({
    mutationFn: ({ newDisciplinas, id }) =>
      createEditDisciplinas(newDisciplinas, id),
    onSuccess: () => {
      toast.success("Cuenta exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["cuentas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editDisciplina };
}
