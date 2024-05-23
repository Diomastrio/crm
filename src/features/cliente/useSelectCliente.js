import { useQuery } from "@tanstack/react-query";
import { getClientes } from "../../services/apiClientes.js";

export function useCliente() {
  const {
    isLoading,
    data: cliente,
    error,
  } = useQuery({
    queryKey: ["clientes"],
    queryFn: getClientes,
  });

  return { isLoading, error, cliente };
}
