

import { useForm } from "react-hook-form";
import { useState,useEffect } from 'react';

import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {  CheckboxWrapper,CheckboxInput,CheckboxBox} from "../../ui/Checkboxes";
import {FormRow,FormRowDiplomado} from "../../ui/FormRow";
import {StyledSelectDiplomado} from "../../ui/SelectTwo";

import {useCreateProspecto} from "./useCreateProspecto";

function CreateProspectoForm({ onCloseModal }) {
  const { isCreating, createProspecto } = useCreateProspecto();
  const isWorking = isCreating ;

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  const watchDiplomados = watch("MasDe1Diploma", false);


  //STATES DIPLOMADOS
  //const [desarrolloHumano, setdesarrolloHumano] = useState([]); 


  //WATCHES
  const watchDisciplinasMas = watch("disciplina");
  const [diplomadosEspecificos, setdiplomadosEspecificos] = useState([]); 

  useEffect(() => {
    if (watchDisciplinasMas===undefined||watchDisciplinasMas===''){
      const diplomadosEspecificos = [''];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas === 'Desarrollo Humano') {
      const diplomadosEspecificos = ['Desarrollo','Humano',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    } 
    else if (watchDisciplinasMas==='Descuentos'){
      const diplomadosEspecificos = ['Descuentosss','D',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Ingeniería'){
      const diplomadosEspecificos = ['Ingenieríaaa','I',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Negocios'){
      const diplomadosEspecificos = ['Negocioss','N',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='OnLive'){
      const diplomadosEspecificos = ['OnLivee','O',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Psicología'){
      const diplomadosEspecificos = ['Psicologíaa','P',];
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
    else if (watchDisciplinasMas==='Salud'){
      const diplomadosEspecificos = ['Saludd','S',];
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
        label={"Disciplinas"}
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

      {watchDiplomados && (
        <>
          <FormRowDiplomado label="Disciplina 2" error={errors?.diplomados_terminados?.message}>
            <StyledSelectDiplomado
            Style={{ width: '20rem'}}
            id="disciplina2"
            isDisabled={isWorking}
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

        <FormRowDiplomado
        label={"Diplomados"}
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
        <Button disabled={isWorking}>Registrar</Button>
      </FormRow>
    </Form>
  );
}

export default CreateProspectoForm;