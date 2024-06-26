import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditDisciplinas } from "../../services/apiCuenta.js";

export function useCreateDisciplina() {
  const queryClient = useQueryClient();

  const { mutate: createDisciplina, isLoading: isCreating } = useMutation({
    mutationFn: createEditDisciplinas,
    onSuccess: () => {
      toast.success("Se ha creado nueva cuenta Exitosamente ",  {
        duration: 6000,
      });

      queryClient.invalidateQueries({ queryKey: ["cuentas"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createDisciplina };
}
