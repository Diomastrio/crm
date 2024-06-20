import { useQuery } from "@tanstack/react-query";
import { getDisciplinas } from "../../services/apiDisciplinas.js";

export function useDisciplina() {
  const {
    isLoading,
    data: disciplina,
    error,
  } = useQuery({
    queryKey: ["disciplinas"],
    queryFn: getDisciplinas,
  });

  return { isLoading, error, disciplina };
}
