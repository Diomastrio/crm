import { useForm } from "react-hook-form";

import Heading from "../../ui/Heading";
import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";

import {useCreateDisciplina} from "./useCreateDisciplina";

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

      <Heading as="h1">AÑADIR DISCIPLINA </Heading>
      <Heading as="h4">Importante añadir diplomados juntos con la nueva disciplina </Heading>
      <FormRow label="Nombre disciplina" style={{}}error={errors?.nombre?.message}>
        <Input
          type="text"
          id="nombre"
          disabled={isWorking}
          {...register("Nombre", {
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