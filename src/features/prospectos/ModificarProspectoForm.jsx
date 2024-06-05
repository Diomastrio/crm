import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {FormRow} from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";

import { useEditProspecto } from "./useEditProspecto";

function ModificarProspectoForm({ clienteToEdit = {}, onCloseModal }) {
  const { isEditing, editProspecto } = useEditProspecto();
  const isWorking = isEditing;

  const { id: editId, ...editValues } = clienteToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  
  function onSubmit(data) {
    editProspecto(
        { newProspecto: { ...data }, id: editId },
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
  >
    <FormRow label="Nombre Completo" error={errors?.nombre?.message}>
      <Input
        type="text"
        id="nombre"
        disabled={isWorking}
        {...register("nombre", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>
    <FormRow label="Correo" error={errors?.email?.message}>
      <Input
        type="email"
        id="email"
        disabled={isWorking}
        {...register("email", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>
    <FormRow label="Telefono" error={errors?.telefono?.message}>
      <Input
        type="number"
        id="telefono"
        disabled={isWorking}
        {...register("telefono", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>
    <FormRow label="Ocupacion" error={errors?.ocupacion?.message}>
      <Input
        type="text"
        id="ocupacion"
        disabled={isWorking}
        {...register("ocupacion", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>

    <FormRow
      label={"Diplomado"}
    >
      <StyledSelectDiplomado
        Style={{ width: '20rem'}}
        id="disciplina"
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
      <Button disabled={isWorking}>Crear cliente</Button>
    </FormRow>
  </Form>
  );
}

export default ModificarProspectoForm;