import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { createEditPromocion } from "../../services/apiPromociones.js";

export function useCreatePromocion() {
  const queryClient = useQueryClient();

  const { mutate: createPromocion, isLoading: isCreating } = useMutation({
    mutationFn: createEditPromocion,
    onSuccess: () => {
      toast.success("Correo exitosamente enviado");

      queryClient.invalidateQueries({ queryKey: ["promocion"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createPromocion };
}
