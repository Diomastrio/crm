import { useForm } from "react-hook-form";

import {Input} from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import { FormRow,FormRowDiplomado } from "../../ui/FormRow";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";

import { useCreateCliente } from "./useCreateClient";
import { useDiplomado } from "../diplomado/useSelectDiplomado";

import { useState,useEffect } from 'react';

import {  CheckboxWrapper,CheckboxInput,CheckboxBox,CheckboxLabel} from "../../ui/Checkboxes";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";

function CreateClientForm({ onCloseModal }) {
  const { isCreating, createCliente } = useCreateCliente();

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
      createCliente(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }
  
  const watchDiplomados = watch("MasDe1Diploma", false);
  const primerDiplomado = watch("disciplina", false);
  const segundoDiplomado = watch("disciplina2", false);

  //WATCHES
  const watchDisciplinasMas = watch("disciplina");
  const [diplomadosEspecificos, setdiplomadosEspecificos] = useState([]);
  const [filteredProductos, setfilteredProductos] = useState([]);

  const { isLoading, diplomado } = useDiplomado();

  useEffect(() => {
    setfilteredProductos(diplomado);
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
          disabled={isCreating}
          {...register("nombre")}
        />
      </FormRow>
      
      <FormRow label="Apellidos" error={errors?.apellido?.message}>
      <Input
        type="text"
        id="apellido"
        disabled={isCreating}
        {...register("apellido", {
        })}
      />
    </FormRow>

      <FormRow label="Correo" error={errors?.email?.message}>
        <Input
          type="mail"
          id="email"
          disabled={isCreating}
          {...register("email")}
        />
      </FormRow>

      <FormRow label="Teléfono" error={errors?.telefono?.message}>
          <Input
            type="number"
            id="telefono"
            disabled={isCreating}
            {...register("telefono", {
               minLength: {
                value: 10,
                message: "El numero de telefono debe ser de 10 digitos",
              }, MaxLength: { value: 11, message: "El numero de telefono debe ser menor de 10 digitos" }
            })}
          />
      </FormRow>

      <FormRow label="¿Más de un diplomado?">
        <>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            id="MasDe1Diploma"
            {...register("MasDe1Diploma", {})}
          />
          <CheckboxBox/>
          <CheckboxLabel >Si </CheckboxLabel>
          
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
          isDisabled={isCreating}
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
        error={errors?.diplomado?.message}
      >
        <StyledSelectDiplomado
          Style={{ width: '20rem'}}
          id="diplomado"
          defaultValue="" 
          isDisabled={isCreating}
          {...register("diplomado", {
            required: "Este campo es requerido",
          })}
        >
                    <option value=""></option>

          {diplomadosEspecificos.map((diplomado, index) => (
            <option key={index} value={diplomado.id}>{diplomado.nombre}</option>
          ))}
        </StyledSelectDiplomado>
      </FormRow>
      )}

      {watchDiplomados && (
          <FormRowDiplomado label="Segunda Disciplina (2)" error={errors?.disciplina2?.message}
          style={{ borde: '20px', borderTopRigthRadius: '20px'}}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="disciplina2"
            isDisabled={isCreating}
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

      {watchDiplomados && segundoDiplomado && (
        <FormRowDiplomado
        label={"Segundo Diplomado"}
        error={errors?.diplomado2?.message}
        >
        <StyledSelectDiplomado
          Style={{ width: '20rem' , backgroundColor: '#e6e5e6'}}
          id="diplomado2"
          defaultValue="" 
          isDisabled={isCreating}
          {...register("diplomado2", {
            required: "Este campo es requerido",
          })}
        >
          <option value=""></option>
          {diplomadosEspecificos2.map((diplomado, index) => (
            <option key={index} value={diplomado.id}>{diplomado.nombre}</option>
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
        <Button disabled={isCreating}>Crear cliente</Button>
      </FormRow>
    </Form>
  );
}

export default CreateClientForm;