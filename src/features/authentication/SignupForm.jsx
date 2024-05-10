import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import TerminosCondiciones from "../../ui/Terminos_Condiciones";
import styled from "styled-components";

import { useSignup } from "./useSignup";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CheckboxBox = styled.span`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 0.25rem;
  transition: background-color 0.2s ease-in-out;
  margin-right: 0.5rem;
  

  border: 1px solid red; 
  background-color: hsl(0, 90%, 95%);  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);


  &::before {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3.4rem;
    color: #000;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  
  ${CheckboxInput}:checked ~ & {
    background-color: #2E8B57 ;
    border-color: #00FF00 ;
    &::before {
      opacity: 1;
    }
  }
`;

const CheckboxLabel = styled.span`
  font-size: 1rem;
  display: inline-block;
`;

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function onSubmit({ fullName, email, password, phone}) {
    signup(
      { fullName, email, password, phone, rol:'cliente' },
      {
        onSettled: () => reset(),
      }
    );
    navigate("/entrar");
  }

  return (<>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Nombre completo" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "Este campo es obligatorio" })}
        />
      </FormRow>

      <FormRow label="Correo electrónico" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "Este campo es obligatorio",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Por favor ingresa un correo electrónico valido",
            },
          })}
        />
      </FormRow>

      <FormRow label="Teléfono" error={errors?.phone?.message}  >
        <Input
          type="text"
          id="phone"
          disabled={isLoading}
          pattern="^[0-9]*$" title="Por favor, ingrese solo números"
          {...register("phone", { 
            required: "Este campo es obligatorio" ,
            step:"any",
          minLength: {
            value: 10,
            message: "Telefono debe tener un mínimo de 10 caracteres",
          },})}
        />
      </FormRow>

      <FormRow
        label="Contraseña (8 caracteres min)"
        error={errors?.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "Este campo es obligatorio",
            minLength: {
              value: 8,
              message: "Contraseña debe tener un mínimo de 8 caracteres",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Reingrese contraseña"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "Este campo es obligatorio",
            validate: (value) =>
              value === getValues().password ||
              "Las contraseñas deben coincidir ",
          })}
        />
      </FormRow>

      <FormRow label="Términos y condiciones">
  <CheckboxWrapper>
    <CheckboxInput
      type="checkbox"
      id="termsAndConditions"
      {...register("termsAndConditions", {
        required: "Debes aceptar los términos y condiciones para registrarte",
      })}
    />
    <CheckboxBox />
    <CheckboxLabel htmlFor="termsAndConditions">Acepto los términos y condiciones</CheckboxLabel>
  </CheckboxWrapper>
</FormRow>

<FormRow>
<Button onClick={handleOpenModal} 
style={{ backgroundColor: '#000'}}>Términos y condiciones</Button>
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
      )}</FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          disabled={isLoading}
          onClick={reset}
        >
          Cancelar
        </Button>
        <Button disabled={isLoading}>Registrarse</Button>
      </FormRow>
    </Form>

</>
  );
}

export default SignupForm;
