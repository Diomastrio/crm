import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import StyledSelect from "../../ui/SelectTwo";

import { useCreateProducto } from "./useCreateProducto";
import { useEditProducto } from "./useEditProducto";

function CreateClientForm({ clienteToEdit = {}, onCloseModal }) {
  const { isCreating, createProducto } = useCreateProducto();
  const { isEditing, editProducto } = useEditProducto();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = clienteToEdit;
  const isEditSession = Boolean(editId);
console.log(editId)
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    if (isEditSession)
      editProducto(
        { newClientData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
    createProducto(
        { ...data },
        {
          onSuccess: () => {
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
      <FormRow label="telefono" error={errors?.telefono?.message}>
        <Input
          type="text"
          id="telefono"
          disabled={isWorking}
          {...register("telefono", {
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
      <FormRow label="RFC" error={errors?.rfc?.message}>
        <Input
          type="text"
          id="rfc"
          disabled={isWorking}
          {...register("rfc", {
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
      <FormRow label="Fecha de inicio" error={errors?.fecha_inicio?.message}>
        <Input
          type="date"
          id="fecha_inicio"
          disabled={isWorking}
          {...register("fecha_inicio", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Fecha de fin" error={errors?.fecha_fin?.message}>
        <Input
          type="date"
          id="fecha_fin"
          disabled={isWorking}
          {...register("fecha_fin", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Fecha limite" error={errors?.fecha_limite?.message}>
        <Input
          type="date"
          id="fecha_limite"
          disabled={isWorking}
          {...register("fecha_limite", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Edad" error={errors?.edad?.message}>
        <Input
          type="number"
          id="edad"
          disabled={isWorking}
          {...register("edad", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "Debe ser mínimo 1",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Lugar de residencia"
        error={errors?.lugar_residencia?.message}
      >
        <Input
          type="text"
          id="lugar_residencia"
          disabled={isWorking}
          {...register("lugar_residencia", {
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
          {...register("numero_diplomados", {
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
          {...register("diplomados_terminados", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "debería ser mínimo 1",
            },
          })}
        />
      </FormRow>

      <FormRow
        label={"Cursa actualmente"}
        error={errors?.cursa_actualmente?.message}
      >
        <StyledSelect
          id="cursa_actualmente"
          isDisabled={isWorking}
          {...register("cursa_actualmente", {
            required: "Este campo es requerido",
          })}
        >
          <option value="true">Si</option>
          <option value="false">No</option>
        </StyledSelect>
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