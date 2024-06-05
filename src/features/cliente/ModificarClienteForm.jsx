import { useForm } from "react-hook-form";
import { useState } from 'react';

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow,FormRowDiplomado } from "../../ui/FormRow";
import { StyledSelect, StyledSelectDiplomado } from "../../ui/SelectTwo";
import { CheckboxWrapper, CheckboxInput, CheckboxBox,CheckboxLabel } from "../../ui/Checkboxes";

import { useEditCliente } from "./useEditCliente";

function ModificarClientForm({ clienteToEdit = {}, onCloseModal }) {
  const { isEditing, editCliente } = useEditCliente();
  const isWorking = isEditing;

  const { id: editId, ...editValues } = clienteToEdit;
  const isEditSession = Boolean(editId);
  const { register, watch, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const fechaInicio = watch("fecha_inicio");

  const watchDiplomados = watch("MasDe1Diploma", false);
  const primerDiplomado = watch("disciplina", false);
  const segundoDiplomado = watch("disciplina2", false);

   //WATCHES
   //const watchDisciplinasMas = watch("disciplina");
   const [diplomadosEspecificos, setdiplomadosEspecificos] = useState([]); 
   const [diplomadosEspecificos2, setdiplomadosEspecificos2] = useState([]); 

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
    editCliente(
      { newCliente: { ...data }, id: editId },
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
      <FormRow label="Fecha de Inicio" error={errors?.fecha_inicio?.message}>
        <Input
          type="date"
          id="fecha_inicio"
          disabled={isWorking}
          {...register("fecha_inicio", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>
      <FormRow label="Fecha de Fin" error={errors?.fecha_fin?.message}>
        <Input
          type="date"
          id="fecha_fin"
          disabled={isWorking}
          {...register("fecha_fin", {
            required: "Este campo es requerido",
            validate: validateFechaFin,
          })}
        />
      </FormRow>
      <FormRow label="Fecha Limite" error={errors?.fecha_limite?.message}>
        <Input
          type="date"
          id="fecha_limite"
          disabled={isWorking}
          {...register("fecha_limite", {
            required: "Este campo es requerido",
            validate: validateFechaLimite,
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
        label="Lugar de Residencia"
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
        label="Diplomados Inscritos"
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
        label="Diplomados Terminados"
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
          {...register("cursa_actualmente", {})}
        >
          <option value="true" selected>Si</option>
          <option value="false">No</option>
        </StyledSelect>
      </FormRow>

      <FormRow label="¿Cursaras más de un diplomado?">
        <>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="MasDe1Diploma"
            {...register("MasDe1Diploma", {})}
          />
          <CheckboxBox/>
          <CheckboxLabel>Si </CheckboxLabel>
          
        </CheckboxWrapper>

        {/* <CheckboxWrapper>
          <CheckboxInput type="checkbox"/>
          <CheckboxBox/>
          <CheckboxLabel>No </CheckboxLabel>
        </CheckboxWrapper> */}
        </>
      </FormRow>

      <FormRow
        label={"Disciplina"}
        error={errors?.cursa_actualmente?.message}
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

      {primerDiplomado && (
      <FormRow
        label={"Diplomados"}
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
          {diplomadosEspecificos.map((diplomado, index) => (
            <option key={index} value={diplomado}>{diplomado}</option>
          ))}
        </StyledSelectDiplomado>
      </FormRow>
      )}

      {watchDiplomados && (
          <FormRowDiplomado label="Segunda Disciplina (2)" error={errors?.diplomados_terminados?.message}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="disciplina2"
            isDisabled={isWorking}
            {...register("disciplina2", {
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
        </FormRowDiplomado>
      )}

      {segundoDiplomado && (
        <FormRowDiplomado
        label={"Segundo Diplomado"}
        error={errors?.cursa_actualmente?.message}
        >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado2"
          defaultValue="" 
          isDisabled={isWorking}
          {...register("diplomado2", {
            required: "Este campo es requerido",
          })}
        >
          <option value=""></option>
          {diplomadosEspecificos2.map((diplomado, index) => (
            <option key={index} value={diplomado}>{diplomado}</option>
          ))}
        </StyledSelectDiplomado>
        </FormRowDiplomado>
      )}

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
