import { useForm } from "react-hook-form";
import { useState } from 'react';

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow } from "../../ui/FormRow";
import { StyledSelectDiplomado } from "../../ui/SelectTwo";

import { useEditDiplomado } from "./useEditDiplomado";

function ModificarClientForm({ clienteToEdit = {}, onCloseModal }) {
  const { isEditing, editDiplomado } = useEditDiplomado();
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
    editDiplomado(
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
