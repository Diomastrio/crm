import { useDiplomado } from "../diplomados/useSelectDiplomado";

import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';

import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {  CheckboxWrapper,CheckboxInput,CheckboxBox,CheckboxLabel} from "../../ui/Checkboxes";
import { FormRow, FormRowDiplomado, FormRowTerminos } from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import TerminosCondiciones from "../../ui/Terminos_Condiciones";

import {useCreateProspecto} from "./useCreateProspecto";

function CreateProspectoForm({ onCloseModal }) {
  
  const { isCreating, createProspecto } = useCreateProspecto();
  
  const isWorking = isCreating ;

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const watchDiplomados = watch("MasDe1Diploma", false);
  const primerDiplomado = watch("disciplina", false);
  const segundoDiplomado = watch("disciplina2", false);


  //STATES DIPLOMADOS
  //const [desarrolloHumano, setdesarrolloHumano] = useState([]); 

 

  //WATCHES
  const watchDisciplinasMas = watch("disciplina");
  const [diplomadosEspecificos, setdiplomadosEspecificos] = useState([]); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (watchDisciplinasMas===undefined||watchDisciplinasMas===''){
      const diplomadosEspecificos = [''];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas === 'Desarrollo Humano') {
      const diplomadosEspecificos = ['','Desarrollo','Humano',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    } 
    else if (watchDisciplinasMas==='Descuentos'){
      const diplomadosEspecificos = ['','Descuentosss','D',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Ingeniería'){
      const diplomadosEspecificos = ['','Ingenieríaaa','I',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Negocios'){
      const diplomadosEspecificos = ['','Negocioss','N',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='OnLive'){
      const diplomadosEspecificos = ['','OnLivee','O',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Psicología'){
      const diplomadosEspecificos = ['','Psicologíaa','P',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Salud'){
      const diplomadosEspecificos = ['','Saludd','S',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
  }, [watchDisciplinasMas]);

  const watchDisciplinasMas2 = watch("disciplina2");
  const [diplomadosEspecificos2, setdiplomadosEspecificos2] = useState([]); 

  useEffect(() => {
    if (watchDisciplinasMas2===undefined||watchDisciplinasMas2===''){
      const specificDiplomados = [''];
      setdiplomadosEspecificos2(specificDiplomados);
    }
    else if (watchDisciplinasMas2 === 'Desarrollo Humano') {
      const specificDiplomados = ['Desarrollo Humanossss'];
      setdiplomadosEspecificos2(specificDiplomados);
    } 
    else if (watchDisciplinasMas2==='Descuentos'){
      const diplomadosEspecificos = ['Descuentosss',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas2==='Ingeniería'){
      const diplomadosEspecificos = ['Ingenieríaaa',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas2==='Negocios'){
      const diplomadosEspecificos = ['Negocioss',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas2==='OnLive'){
      const diplomadosEspecificos = ['OnLivee',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas2==='Psicología'){
      const diplomadosEspecificos = ['Psicologíaa',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas2==='Salud'){
      const diplomadosEspecificos = ['Saludd',];
      setdiplomadosEspecificos2(diplomadosEspecificos);
    }
  }, [watchDisciplinasMas2]);
  //console.log(diplomadosEspecificos)

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

  const { isLoading, diplomado } = useDiplomado();
  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomados" />;







  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "prospecto"}
      style={{height: '110vh'}}
    >

    <Heading as="h1">¡Llena todos los campos! </Heading>
      <FormRow label="Tu Nombre Completo" style={{}}error={errors?.nombre?.message}>
        <Input
          type="text"
          id="nombre"
          disabled={isWorking}
          {...register("nombre", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow label="Tu Correo" error={errors?.email?.message}>
        <Input
          type="mail"
          id="email"
          disabled={isWorking}
          {...register("email", {
            required: "Este campo es requerido",
          })}
        />
      </FormRow>

      <FormRow label="Tu Teléfono" error={errors?.telefono?.message}>
          <Input
            type="number"
            id="telefono"
            disabled={isWorking}
            {...register("telefono", {
              required: "Este campo es requerido", minLength: {
                value: 10,
                message: "El numero de telefono debe ser de 10 digitos",
              }, MaxLength: { value: 10, message: "error message" }
            })}
          />
      </FormRow>

      <FormRow label="Tu Ocupación" error={errors?.ocupacion?.message}>
        <Input
          type="text"
          id="ocupacion"
          disabled={isWorking}
          {...register("ocupacion", {
            required: "Este campo es requerido",
          })}
        />
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

      <FormRowTerminos  error={errors?.terminosCondiciones?.message}>
        <>
        <CheckboxWrapper>
          <CheckboxInput type="checkbox"  
          id="terminosCondiciones"
            {...register("terminosCondiciones", { required: "Necesitas Aceptar los términos y condiciones",})}
          />
          <CheckboxBox/>
          <CheckboxLabel htmlFor="terminosCondiciones">Acepto los términos y condiciones</CheckboxLabel>          
        </CheckboxWrapper>

        <Button onClick={handleOpenModal} variation="danger">Términos y condiciones</Button>
      {showModal && (
        <div 
        style={{position: 'fixed', top: 0, left: 0, width: '100%',height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999}}
          onClick={handleCloseModal}
          >
          <div 
          style={{position: 'relative', backgroundColor: 'var(--color-grey-100)',padding: '20px', borderRadius: '5px', width:'90%'}}
            onClick={(e) => e.stopPropagation()} 
            >
            <h2  style={{color: 'var(--color-grey-500)'}}>Términos y condiciones</h2>
            <TerminosCondiciones/>
            <Button onClick={handleCloseModal} >Aceptar</Button>
          </div>
        </div>
      )}</>
      </FormRowTerminos>

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