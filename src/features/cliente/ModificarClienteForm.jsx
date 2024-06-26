import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';

import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow,FormRowDiplomado } from "../../ui/FormRow";
import { StyledSelect, StyledSelectDiplomado,StyledSelectCuenta } from "../../ui/SelectTwo";
import { CheckboxWrapper, CheckboxInput, CheckboxBox,CheckboxLabel } from "../../ui/Checkboxes";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useEditCliente } from "./useEditCliente";
import { useDiplomado } from "../diplomado/useSelectDiplomado";
import { useCuenta } from "../cuentas/useSelectCuenta";

function ModificarClientForm({ clienteToEdit = {}, onCloseModal }) {
  const { isEditing, editCliente } = useEditCliente();

  const { id: editId, ...editValues } = clienteToEdit;
  const isEditSession = Boolean(editId);

  const { register, watch, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const fechaInicio = watch("fecha_inicio");

  const validateFechaFin = (value) => {
    if (fechaInicio && value <= fechaInicio) {
      return "La Fecha de Fin debe ser posterior a la Fecha de Inicio";
    }
    return true;
  };

  const validateFechaLimite = (value) => {
    if (fechaInicio && value <= fechaInicio) {
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

  const watchDiplomados = watch("MasDe1Diploma", false);
  const primerDisciplina = watch("disciplina", false);
  const primerDiplomado = watch("diplomado", false);
  const segundoDisciplina = watch("disciplina2", false);
  const segundoDiplomado = watch("diplomado2", false);

  //WATCHES
  const watchDisciplinasMas = watch("disciplina");
  const [diplomadosEspecificos, setdiplomadosEspecificos] = useState([]);
  const [filteredProductos, setfilteredProductos] = useState([]);

  const { isLoading, diplomado } = useDiplomado();

  useEffect(() => {
    if (diplomado) setfilteredProductos(diplomado);
  }, [diplomado]);

  useEffect(() => {
    if (watchDisciplinasMas===undefined||watchDisciplinasMas===''){
      const diplomadosEspecificos = [''];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas === 'Desarrollo Humano') {
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Desarrollo Humano")
      setdiplomadosEspecificos(diplomadosEspecificos);
    } 
    else if (watchDisciplinasMas==='Descuentos'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Descuentos")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Ingeniería'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Ingeniería")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Negocios'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Negocios")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='OnLive'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "OnLive")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Psicología'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Psicología")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Salud'){
      const diplomadosEspecificos = filteredProductos.filter((diplomado) => diplomado.disciplina === "Salud")
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
  }, [watchDisciplinasMas,filteredProductos]);

  const watchDisciplinasMas2 = watch("disciplina2");
  const [diplomadosEspecificos2, setdiplomadosEspecificos2] = useState([]); 

  useEffect(() => {
    if (watchDisciplinasMas2===undefined||watchDisciplinasMas2===''){
      const diplomadosEspecificos2 = [''];
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2 === 'Desarrollo Humano') {
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Desarrollo Humano")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } 
    else if (watchDisciplinasMas2==='Descuentos'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Descuentos")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2==='Ingeniería'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Ingeniería")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2==='Negocios'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Negocios")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2==='OnLive'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "OnLive")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2==='Psicología'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Psicología")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
    else if (watchDisciplinasMas2==='Salud'){
      const diplomadosEspecificos2 = filteredProductos.filter((diplomado) => diplomado.disciplina === "Salud")
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
  }, [watchDisciplinasMas2,filteredProductos]);

  const { isLoading :loading, cuenta } = useCuenta();

  if (loading) return <Spinner />;
  if (!cuenta.length) return <Empty resourceName="cuenta" />;

  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomados" />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >

<FormRow label="Nombre" error={errors?.nombre?.message}>
      <Input
        type="text"
        id="nombre"
        disabled={isEditing}
        {...register("nombre", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>
    <FormRow label="Apellidos" error={errors?.apellido?.message}>
      <Input
        type="text"
        id="apellido"
        disabled={isEditing}
        {...register("apellido", {
          required: "Este campo es requerido",
        })}
      />
    </FormRow>

      <FormRow label="Correo" error={errors?.email?.message}>
        <Input
          type="mail"
          id="email"
          disabled={isEditing}
          {...register("email", {
            
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor ingresa un correo electrónico valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="Telefono" error={errors?.telefono?.message}>
        <Input
          type="number"
          id="telefono"
          disabled={isEditing}
          {...register("telefono", {
            
            minLength: {
              value: 10,
              message: "El numero de telefono debe ser de 10 digitos",
            }, MaxLength: { value: 11, message: "El numero de telefono debe ser menor de 10 digitos" }
          })}
        />
      </FormRow>

      <FormRow label="Curp" error={errors?.curp?.message}>
        <Input
          style={{textTransform:'uppercase'}}
          type="text"
          id="curp"
          disabled={isEditing}
          {...register("curp", {
            
            pattern: {
              value: /^[a-zA-Z]{4}\d{6}[HM][a-zA-Z]{5,6}\d{1}$/,
              message: "Por favor ingresa un CURP valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="RFC" error={errors?.rfc?.message}>
        <Input
          type="text"
          id="rfc"
          disabled={isEditing}
          {...register("rfc", {
            
            pattern: {
              value:  /^[A-Z&]{3,4}(\d{6})((\D|\d){3})?$/,
              message: "Por favor ingresa un RFC electrónico valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="Ocupacion" error={errors?.ocupacion?.message}>
        <Input
          type="text"
          id="ocupacion"
          disabled={isEditing}
          {...register("ocupacion", {
            
          })}
        />
      </FormRow>

      <FormRow label={"Genero"} error={errors?.genero?.message}>
        <StyledSelect style={{  width:'55%'}}
          id="genero"
          isDisabled={isEditing}
          {...register("genero", {})}
        >
          <option value="H" selected>Hombre</option>
          <option value="M">Mujer</option>
          <option value="O">Otro</option>
        </StyledSelect>
      </FormRow>
      <FormRow label="Edad" error={errors?.edad?.message}>
        <Input
          type="number"
          id="edad"
          disabled={isEditing}
          {...register("edad", {
            
            min: {
              value: 18,
              message: "Edad mayor de 18",
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
          disabled={isEditing}
          {...register("lugar_residencia", {
            
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
          disabled={isEditing}
          {...register("numero_diplomados", {
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
          disabled={isEditing}
          {...register("diplomados_terminados", {
            min: {
              value: 0,
              message: "debería ser mínimo +0",
            },
          })}
        />
      </FormRow>

      <FormRow label="Diplomados enviados"error={errors?.dipl_sent?.message}>
        <Input
          type="number"
          id="dipl_sent"
          disabled={isEditing}
          {...register("dipl_sent", {
            min: { value: 0, message: "debería ser mínimo +0",},
          })}
        />
      </FormRow>

      <FormRow label="Cuenta de Banco" error={errors?.cuentaBanco?.message}>
        <StyledSelectCuenta
          Style={{ width: "20rem" }}
          id="cuentaBanco"
          defaultValue=""
          isDisabled={isEditing}
          {...register("cuentaBanco", {
          })}
        >
          {cuenta.map((cuenta, index) => (
            <option key={index} value={cuenta.cuenta_bancaria}>{cuenta.cuenta_bancaria}</option>
          ))}
        </StyledSelectCuenta>
      </FormRow>
      
     
      
      <FormRow label="Más de un diplomado?">
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
        error={errors?.disciplina?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="disciplina"
          defaultValue="" 
          isDisabled={isEditing}
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

      {primerDiplomado && (
      <FormRow
        label={"Diplomados"}
        error={errors?.diplomado?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado"
          isDisabled={isEditing}
          {...register("diplomado", {
            required: "Este campo es requerido",
          })}
        >
          {diplomadosEspecificos.map((diplomado, index) => (
            <option key={index} value={diplomado.nombre}>{diplomado.nombre}</option>
          ))}
        </StyledSelectDiplomado>
      </FormRow>
      )}


{primerDiplomado && (
<>
    <FormRow label={"Cursa actualmente(activo)"} error={errors?.cursa_actualmente?.message} >
        <StyledSelect
          id="cursa_actualmente"
          isDisabled={isEditing}
          {...register("cursa_actualmente", {})}
        >
          <option value="true" selected>Si</option>
          <option value="false">No</option>
        </StyledSelect>
      </FormRow>

    <FormRow label="Fecha de Inicio" error={errors?.fecha_inicio?.message}>
        <Input
          type="date"
          id="fecha_inicio"
          disabled={isEditing}
          {...register("fecha_inicio", {
            
          })}
        />
      </FormRow>

      <FormRow label="Fecha de Fin" error={errors?.fecha_fin?.message}>
        <Input
          type="date"
          id="fecha_fin"
          disabled={isEditing}
          {...register("fecha_fin", {
            validate: validateFechaFin,
          })}
        />
      </FormRow>

      <FormRow label="Fecha Limite" error={errors?.fecha_limite?.message}>
        <Input
          type="date"
          id="fecha_limite"
          disabled={isEditing}
          {...register("fecha_limite", {
            validate: validateFechaLimite,
          })}
        />
      </FormRow>
   
      <FormRow
        label={"Estatus (Fin Curso)"}
        error={errors?.status1?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="status1"
          defaultValue="" 
          isDisabled={isEditing}
          {...register("status1")}
        >
          <option value="Acabo">Acabo</option>
          <option value="No Acabo">No acabo</option>
          <option value="Enviado">Dipl. Enviado</option>
        </StyledSelectDiplomado>
      </FormRow>
      </>
            )}

      {watchDiplomados && (
          <FormRowDiplomado label="Segunda Disciplina (2)" error={errors?.disciplina2?.message}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="disciplina2"
            isDisabled={isEditing}
            {...register("disciplina2", {
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
        </FormRowDiplomado>
      )}

      {watchDiplomados && segundoDiplomado && (
        <FormRowDiplomado
        label={"Segundo Diplomado"}
        error={errors?.diplomado2?.message}
        >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado2"
          defaultValue="" 
          isDisabled={isEditing}
          {...register("diplomado2", {
            required: "Este campo es requerido",
          })}
        >
          {diplomadosEspecificos2.map((diplomado, index) => (
            <option key={index} value={diplomado.nombre}>{diplomado.nombre}</option>
          ))}
        </StyledSelectDiplomado>
        </FormRowDiplomado>
      )}

{watchDiplomados && segundoDiplomado && (
        <>
         <FormRow label={"Cursa actualmente(activo)"} error={errors?.cursa_actualmente?.message} >
        <StyledSelect
          id="cursa_actualmente2"
          isDisabled={isEditing}
          {...register("cursa_actualmente", {})}
        >
          <option value="true" selected>Si</option>
          <option value="false">No</option>
        </StyledSelect>
      </FormRow>

        <FormRow label="Fecha de Inicio" error={errors?.fecha_inicio2?.message}>
        <Input
          type="date"
          id="fecha_inicio2"
          disabled={isEditing}
          {...register("fecha_inicio2", {
            
          })}
        />
      </FormRow>

      <FormRow label="Fecha de Fin" error={errors?.fecha_fin2?.message}>
        <Input
          type="date"
          id="fecha_fin2"
          disabled={isEditing}
          {...register("fecha_fin2", {
            
            validate: validateFechaFin,
          })}
        />
      </FormRow>

      <FormRow label="Fecha Limite" error={errors?.fecha_limite2?.message}>
        <Input
          type="date"
          id="fecha_limite2"
          disabled={isEditing}
          {...register("fecha_limite2", {
            validate: validateFechaLimite,
          })}
        />
      </FormRow>
      <FormRow
        label={"Estatus (Fin Curso)"}
        error={errors?.status2?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="status2"
          defaultValue="" 
          isDisabled={isEditing}
          {...register("status2")}
        >
          <option value="Acabo">Acabo</option>
          <option value="No Acabo">No acabo</option>
          <option value="Enviado">Dipl. Enviado</option>
        </StyledSelectDiplomado>
      </FormRow>
      </>
            )}

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isEditing}>Actualizar</Button>
      </FormRow>
    </Form>
  );
}

export default ModificarClientForm;
