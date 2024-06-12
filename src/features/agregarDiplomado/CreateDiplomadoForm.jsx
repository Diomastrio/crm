import { useForm } from "react-hook-form";

import Heading from "../../ui/Heading";
import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";

import {useCreateDiplomado} from "./useCreateDiplomado";

function CreateDiplomadoForm({ onCloseModal }) {
  
  const { isCreating, createDiplomado } = useCreateDiplomado();
  const isWorking = isCreating ;

  const { register, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
    createDiplomado(
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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
      style={{height: '60vh'}}
    >

      <Heading as="h1">Añadir diplomado </Heading>
      <Heading as="h2">Estos diplomados seran visibles al prospecto </Heading>
      <FormRow label="Nombre del diplomado" style={{}}error={errors?.nombre?.message}>
        <Input
          type="text"
          id="nombre"
          disabled={isWorking}
          {...register("nombre", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow
        label={"Disciplina"}
        error={errors?.disciplina?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="disciplina"
          defaultValue="" 
          isDisabled={isWorking}
          {...register("disciplina", {
            required: "Este campo es requerido",
          })}
        >
          <option value=""></option>
          <option value="Desarrollo Humano">Desarrollo Humano</option>
          <option value="Descuentos">Descuentos</option>
          <option value="Educación">Educación</option>
          <option value="Ingeniería">Ingeniería</option>
          <option value="Negocios">Negocios</option>
          <option value="OnLive">OnLive</option>
          <option value="Psicología">Psicología</option>
          <option value="Salud">Salud</option>
        </StyledSelectDiplomado>
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" onClick={() => onCloseModal?.()}>Cancelar</Button>
        <Button disabled={isWorking}>Registrar</Button>
      </FormRow>
    </Form>
  );
}

export default CreateDiplomadoForm;