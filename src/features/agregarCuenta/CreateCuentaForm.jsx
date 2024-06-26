import { useForm } from "react-hook-form";

import Heading from "../../ui/Heading";
import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";

import {useCreateDisciplina} from "./useCreateCuenta";

function CreateDisciplinaForm({ onCloseModal }) {
  
  const { isCreating, createDisciplina } = useCreateDisciplina();
  const isWorking = isCreating ;

  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
    createDisciplina(
      { ...data},
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  return (
    <>
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
      style={{MaxHeight: '35vh', border:'none'}}
    >

      <Heading as="h1">Añadir Cuenta</Heading>
      <FormRow label="Nombre Banco" style={{}}error={errors?.nombre?.message}>
        <Input
          type="text"
          id="banco"
          disabled={isWorking}
          {...register("banco", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Cuenta Bancaria" style={{}}error={errors?.nombre?.message}>
        <Input
          type="text"
          id="cuenta_bancaria"
          disabled={isWorking}
          {...register("cuenta_bancaria", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>Cancelar</Button>
        <Button disabled={isWorking}>Registrar</Button>
      </FormRow>
    </Form>
</>
  );
}

export default CreateDisciplinaForm;