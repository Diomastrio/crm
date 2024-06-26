import { useForm } from "react-hook-form";

import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import { StyledSelectDiplomado } from "../../ui/SelectTwo";

import { useEditDiplomado } from "./useEditDiplomado";

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
          <option value="Desarrollo Humano">Desarrollo Humano</option>
          <option value="Descuentos">Descuentos</option>
          <option value="Ingeniería">Ingeniería</option>
          <option value="Negocios">Negocios</option>
          <option value="OnLive">OnLive</option>
          <option value="Psicología">Psicología</option>
          <option value="Salud">Salud</option>
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
