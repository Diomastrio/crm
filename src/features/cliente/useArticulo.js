import { useQuery } from "@tanstack/react-query";
import { getArticulos } from "../../services/apiArticulos";

export function useArticulos() {
  const {
    isLoading,
    data: cliente,
    error,
  } = useQuery({
    queryKey: ["clientes"],
    queryFn: getArticulos,
  });

  return { isLoading, error, cliente };
}
