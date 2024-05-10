import supabase from "../../services/supabase";
import { useQuery } from "@tanstack/react-query";

async function getSugerencias() {
  const { data, error } = await supabase.from("sugerencias").select("*");

  if (error) {
    console.error(error);
    throw new Error("Sugerencias no pudieron ser cargadas");
  }

  return data;
}
export function useSugerencias() {
  const {
    isLoading,
    data: sugerencias,
    error,
  } = useQuery({
    queryKey: ["sugerencias"],
    queryFn: getSugerencias,
  });

  return { isLoading, error, sugerencias };
}
