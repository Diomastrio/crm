import { useForm } from "react-hook-form";

import Heading from "../../ui/Heading";
import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import {useCreateDiplomado} from "./useCreateDiplomado";
import {useDisciplina} from "../disciplinas/useSelectDisciplina";

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

  const { isLoading, disciplina } = useDisciplina();

  if (isLoading) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
      style={{height: '40vh'}}
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
        label={"Diplomados"}
        error={errors?.cursa_actualmente?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado"
          defaultValue="" 
          isDisabled={isWorking}
          {...register("disciplina", {
            required: "Este campo es requerido",
          })}
        >
          {disciplina.map((disciplina, index) => (
            <option key={index} value={disciplina.Nombre}>{disciplina.Nombre}</option>
          ))}
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