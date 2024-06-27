import { useForm } from "react-hook-form";

import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import { useEditDiplomado } from "./useEditDiplomado";
import {useDisciplina} from "../disciplinas/useSelectDisciplina";

function ModificarClientForm({ diplomadoToEdit = {}, onCloseModal }) {
  const { isEditing, editDiplomado } = useEditDiplomado();
  const isWorking = isEditing;

  const { id: editId, ...editValues } = diplomadoToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    editDiplomado(
      { newDiplomado: { ...data }, id: editId },
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
      style={{width: '120vh'}}
    >
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

      <FormRow label="Acronimo" style={{}}error={errors?.Acronimo?.message}>
      <Input
          type="text"
          id="Acronimo"
          disabled={isWorking}
          {...register("Acronimo", {
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
            {disciplina.map((disciplina, index) => (
            <option key={index} value={disciplina.Nombre}>{disciplina.Nombre}</option>
          ))}
        </StyledSelectDiplomado>
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isWorking}>Actualizar</Button>
      </FormRow>
    </Form>
  );
}

export default ModificarClientForm;
