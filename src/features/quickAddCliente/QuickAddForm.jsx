import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useCreateCliente } from "./useCreateClient";
import { useDiplomado } from "../diplomado/useSelectDiplomado";

function CreateClientForm({ onCloseModal }) {
  const { isCreating, createCliente } = useCreateCliente();

  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
      createCliente(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  
  const { isLoading, diplomado } = useDiplomado();

  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomados" />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >

      <FormRow label="Nombre Completo" error={errors?.nombre?.message}>
        <Input
          type="text"
          id="nombre"
          disabled={isCreating}
          {...register("nombre", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow label="Correo" error={errors?.email?.message}>
        <Input
          type="mail"
          id="email"
          disabled={isCreating}
          {...register("email", {
            required: "Este campo es requerido",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor ingresa un correo electrónico valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="Telefono" error={errors?.telefono?.message}>
        <Input
          type="number"
          id="telefono"
          disabled={isCreating}
          {...register("telefono", {
            required: "Este campo es requerido",
            minLength: {
              value: 10,
              message: "El numero de telefono debe ser de 10 digitos",
            }, MaxLength: { value: 11, message: "El numero de telefono debe ser menor de 10 digitos" }
          })}
        />
      </FormRow>

      <FormRow label="Curp" error={errors?.curp?.message}>
        <Input
          type="text"
          id="curp"
          disabled={isCreating}
          {...register("curp", {
            required: "Este campo es requerido",
            pattern: {
              value: /^[A-Z]{4}\d{5,6}[HM][A-Z]{5,6}\d{1}$/,
              message: "Por favor ingresa un CURP valido",
            },
          })}
        />
      </FormRow>

      
      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isCreating}>Crear cliente</Button>
      </FormRow>
    </Form>
  );
}

export default CreateClientForm;