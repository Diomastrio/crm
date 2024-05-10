import { useQuery } from "@tanstack/react-query";
import { getArticulos } from "../../services/apiArticulos";

export function useArticulos() {
  const {
    isLoading,
    data: productos,
    error,
  } = useQuery({
    queryKey: ["articulo"],
    queryFn: getArticulos,
  });

  return { isLoading, error, productos };
}
