import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateProducto } from "./useCreateProducto";
import { useEditProducto } from "./useEditProducto";

function CreateProductoForm({ productoToEdit = {}, onCloseModal }) {
  const { isCreating, createProducto } = useCreateProducto();
  const { isEditing, editProducto } = useEditProducto();
  const isWorking = isCreating || isEditing;

  const { id: editId, ...editValues } = productoToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editProducto(
        { newProductoData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createProducto(
        { ...data, image: image },
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
      <FormRow label="Nombre del producto" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow label="Precio" error={errors?.precio?.message}>
        <Input
          type="number"
          id="precio"
          disabled={isWorking}
          {...register("precio", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "El precio debe ser mínimo 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Cantidad" error={errors?.cantidad?.message}>
        <Input
          type="number"
          id="cantidad"
          disabled={isWorking}
          {...register("cantidad", {
            required: "Este campo es requerido",
            min: {
              value: 1,
              message: "cantidad debería ser mínimo 1",
            },
          })}
        />
      </FormRow>

      <FormRow label="Descripción" error={errors?.descripcion?.message}>
        <Textarea
          type="text"
          id="descripcion"
          defaultValue=""
          disabled={isWorking}
          {...register("descripcion", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow label="Imagen del producto">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Editar producto" : "Crear un producto"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateProductoForm;
