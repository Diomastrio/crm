import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

import { useCreateCliente } from "./useCreateClient";
import { useEditCliente } from "./useEditClient";
import CheckBoxTwo from "../../ui/CheckBoxTwo";

function CreateClientForm({ clienteToEdit = {}, onCloseModal }) {
  const { isCreating, createCliente } = useCreateCliente();
  const { isEditing, editCliente } = useEditCliente();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = clienteToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editCliente(
        { newClienteData: { ...data }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createCliente(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Nombre completo" error={errors?.nombre?.message}>
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
          type="text"
          id="email"
          disabled={isWorking}
          {...register("email", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Curp" error={errors?.curp?.message}>
        <Input
          type="text"
          id="curp"
          disabled={isWorking}
          {...register("curp", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow
        label="Diplomados inscritos"
        error={errors?.numero_diplomados?.message}
      >
        <Input
          type="number"
          id="numero_diplomados"
          disabled={isWorking}
          {...register("d_inscritos", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "Debe ser mínimo 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Diplomados terminados"
        error={errors?.diplomados_terminados?.message}
      >
        <Input
          type="number"
          id="diplomados_terminados"
          disabled={isWorking}
          {...register("d_terminados", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "debería ser mínimo 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"cursa actualmente"}
        error={errors?.cursa_actualmente?.message}
      >
        <CheckBoxTwo type="checkbox" id="cursa_actualmente" />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Editar cliente" : "Crear cliente"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateClientForm;
