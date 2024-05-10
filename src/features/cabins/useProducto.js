import { useQuery } from "@tanstack/react-query";
import { getProductosTable } from "../../services/apiProductos";

export function useProductos() {
  const {
    isLoading,
    data: productos,
    error,
  } = useQuery({
    queryKey: ["productos"],
    queryFn: getProductosTable,
  });

  return { isLoading, error, productos };
}
