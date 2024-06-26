import { useQuery } from "@tanstack/react-query";
import { getDisciplinas } from "../../services/apiCuenta.js";

export function useCuenta() {
  const {
    isLoading,
    data: cuenta,
    error,
  } = useQuery({
    queryKey: ["cuentas"],
    queryFn: getDisciplinas,
  });

  return { isLoading, error, cuenta };
}
