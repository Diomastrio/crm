import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditDisciplinas } from "../../services/apiDisciplinas.js";
import { toast } from "react-hot-toast";

export function useEditDisciplina() {
  const queryClient = useQueryClient();

  const { mutate: editDisciplina, isLoading: isEditing } = useMutation({
    mutationFn: ({ newDisciplinas, id }) =>
      createEditDisciplinas(newDisciplinas, id),
    onSuccess: () => {
      toast.success("Disciplina exitosamente editado");
      queryClient.invalidateQueries({ queryKey: ["disciplinas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editDisciplina };
}
