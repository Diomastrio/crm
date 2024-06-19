import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditDisciplinas } from "../../services/apiDisciplinas.js";

export function useCreateDisciplina() {
  const queryClient = useQueryClient();

  const { mutate: createDisciplina, isLoading: isCreating } = useMutation({
    mutationFn: createEditDisciplinas,
    onSuccess: () => {
      toast.success("Se ha creado nueva disciplina Exitosamente ",  {
        duration: 6000,
      });

      queryClient.invalidateQueries({ queryKey: ["disciplinas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createDisciplina };
}
