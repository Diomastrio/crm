

import { useForm } from "react-hook-form";

import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {  CheckboxWrapper,CheckboxInput,CheckboxBox} from "../../ui/Checkboxes";
import {FormRow} from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";

import {useCreateProspecto} from "./useCreateProspecto";

function CreateProspectoForm({ onCloseModal }) {
  const { isCreating, createProspecto } = useCreateProspecto();
  const isWorking = isCreating ;

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const watchDiplomados = watch("MasDe1Diploma", false);

  function onSubmit(data) {
    createProspecto(
        { ...data },
        {
          onSuccess: (data) => {
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

    <Heading as="h1">Llena todos los campos! </Heading>
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
          type="mail"
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

      <FormRow label="Mas de un diplomado?">
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="MasDe1Diploma"
            {...register("MasDe1Diploma", {})}
          />
          <CheckboxBox/>
        </CheckboxWrapper>
      </FormRow>

      <FormRow
        label={"Diplomado"}
        error={errors?.cursa_actualmente?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado"
          defaultValue="" 
          isDisabled={isWorking}
          {...register("diplomado", {
            required: "Este campo es requerido",
          })}
        >
          <option value=""></option>
          <option value="Desarrollo Humano">Desarrollo Humano</option>
          <option value="Descuentos">Descuentos</option>
          <option value="Ingeniería">Ingeniería</option>
          <option value="Negocios">Negocios</option>
          <option value="OnLive">OnLive</option>
          <option value="Psicología">Psicología</option>
          <option value="Salud">Salud</option>
        </StyledSelectDiplomado>
      </FormRow>

      {watchDiplomados && (
          <FormRow label="Diplomado 2" error={errors?.diplomados_terminados?.message}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="diplomado2"
            isDisabled={isWorking}
            {...register("diplomado2", {
              required: "Este campo es requerido",
            })}
          >
            <option value=""></option>
            <option value="Desarrollo Humano">Desarrollo Humano</option>
            <option value="Descuentos">Descuentos</option>
            <option value="Ingeniería">Ingeniería</option>
            <option value="Negocios">Negocios</option>
            <option value="OnLive">OnLive</option>
            <option value="Psicología">Psicología</option>
            <option value="Salud">Salud</option>
          </StyledSelectDiplomado>
        </FormRow>
      )}

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isWorking}>Registrar</Button>
      </FormRow>
    </Form>
  );
}

export default CreateProspectoForm;