import { useQuery } from "@tanstack/react-query";
import { getMarcadorTable } from "../../services/apiMarcador";

export function useMarcadorTable() {
  const {
    isLoading,
    data: productos,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getMarcadorTable,
  });

  return { isLoading, error, productos };
}
