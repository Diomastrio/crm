import { useForm } from "react-hook-form";

import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";

import { useEditDisciplina } from "./useEditDisciplina";

function ModificarClientForm({ diplomadoToEdit = {}, onCloseModal }) {
  const { isEditing, editDisciplina } = useEditDisciplina();
  const isWorking = isEditing;

  const { id: editId, ...editValues } = diplomadoToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    editDisciplina(
      { newDisciplinas: { ...data }, id: editId },
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
      style={{width: '120vh'}}
    >
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
