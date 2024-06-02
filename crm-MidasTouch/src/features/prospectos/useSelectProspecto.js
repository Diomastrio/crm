import { useQuery } from "@tanstack/react-query";
import { getProspectos } from "../../services/apiProspectos.js";

export function useProspecto () {
  const {
    isLoading,
    data: prospecto,
    error,
  } = useQuery({
    queryKey: ["prospectos"],
    queryFn: getProspectos,
  });

  return { isLoading, error, prospecto };
}
