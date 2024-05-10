import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      // Show success message
      toast.success("¡Cuenta creada con éxito!");
    },
    onError: (error) => {
      // Show error message
      if (error.message === "Email already registered") {
        toast.error("¡El correo electrónico ya está registrado!", { delay: 4000 });
        navigate("/login"); 
      } else {
        toast.error("¡Ha ocurrido un error al crear la cuenta!");
      }
    },
  });

  return { signup, isLoading };
}
