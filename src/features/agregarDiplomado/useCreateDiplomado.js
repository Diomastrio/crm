import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditDiplomados } from "../../services/apiDiplomados.js";

export function useCreateDiplomado() {
  const queryClient = useQueryClient();

  const { mutate: createDiplomado, isLoading: isCreating } = useMutation({
    mutationFn: createEditDiplomados,
    onSuccess: () => {
      toast.success("Se ha creado nuevo diplomado Exitosamente ",  {
        duration: 6000,
      });

      queryClient.invalidateQueries({ queryKey: ["diplomado"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createDiplomado };
}
