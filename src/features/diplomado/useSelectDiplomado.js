import { useQuery } from "@tanstack/react-query";
import { getDiplomados } from "../../services/apiDiplomados.js";

export function useDiplomado() {
  const {
    isLoading,
    data: diplomado,
    error,
  } = useQuery({
    queryKey: ["diplomados"],
    queryFn: getDiplomados,
  });

  return { isLoading, error, diplomado };
}
