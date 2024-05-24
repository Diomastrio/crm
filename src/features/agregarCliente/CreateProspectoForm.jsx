

import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {  CheckboxWrapper,CheckboxInput,CheckboxBox,CheckboxLabel} from "../../ui/Checkboxes";
import {FormRow} from "../../ui/FormRow";
import {StyledSelect,StyledSelectDiplomado} from "../../ui/SelectTwo";

import { useCreateCliente } from "./useCreateClient";

function CreateClientForm({ onCloseModal }) {
  const { isCreating, createCliente } = useCreateCliente();
  const isWorking = isCreating ;

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const fechaInicio = watch("fecha_inicio"); 
  const watchDiplomadis = watch("NumeroDiplomados", false);

  const validateFechaFin = (value) => {
    if (value <= fechaInicio) {
      return "La Fecha de Fin debe ser posterior a la Fecha de Inicio";
    }
    return true;
  };
  
  const validateFechaLimite = (value) => {
    if (value <= fechaInicio) {
      return "La Fecha de Fin debe ser posterior a la Fecha de Inicio";
    }
    return true;
  };

  function onSubmit(data) {
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
            id="NumeroDiplomados"
            {...register("MasDe1Diploma", {
            })}
          />
          <CheckboxBox/>
          <CheckboxLabel htmlFor="NumeroDiplomados">2</CheckboxLabel>
        </CheckboxWrapper>
      </FormRow>

      <FormRow
        label={"Diplomado"}
        error={errors?.cursa_actualmente?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="nombre_diplomado"
          isDisabled={isWorking}
          {...register("nombre_diplomado", {
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

      {watchDiplomadis && (
          <FormRow label="Diplomado 2" error={errors?.diplomados_terminados?.message}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="nombre_diplomado2"
            isDisabled={isWorking}
            {...register("nombre_diplomado2", {
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
        <Button disabled={isWorking}>Crear cliente</Button>
      </FormRow>
    </Form>
  );
}

export default CreateClientForm;