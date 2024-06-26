import { useDiplomado } from "../diplomado/useSelectDiplomado";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import Heading from "../../ui/Heading";
import { Inputi } from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import {
  CheckboxWrapper,
  CheckboxInput,
  CheckboxBox,
  CheckboxLabel,
} from "../../ui/Checkboxes";
import {
  FormRowProspectos,
  FormRowDiplomado,
  FormRowTerminos,
} from "../../ui/FormRow";
import { StyledSelectDiplomad } from "../../ui/SelectTwo";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import TerminosCondiciones from "../../ui/Terminos_Condiciones";

import { useCreateProspecto } from "./useCreateProspecto";
import { useDisciplina } from "../disciplinas/useSelectDisciplina";

function CreateProspectoForm({ onCloseModal }) {
  const { isCreating, createProspecto } = useCreateProspecto();

  const { register, watch, handleSubmit, reset, formState } = useForm({});
  const { errors } = formState;

  function onSubmit(data) {
    createProspecto(
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

  const [showModal, setShowModal] = useState(false);
  const { isLoading, diplomado } = useDiplomado();

  useEffect(() => {
    setfilteredProductos(diplomado);
  }, [diplomado]);

  useEffect(() => {
    if (watchDisciplinasMas === undefined || watchDisciplinasMas === "") {
      const diplomadosEspecificos = [""];
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Desarrollo Humano") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Desarrollo Humano"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Descuentos") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Descuentos"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Ingeniería") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Ingeniería"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Negocios") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Negocios"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "OnLive") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "OnLive"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Psicología") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Psicología"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas === "Salud") {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Salud"
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    } else if (watchDisciplinasMas2) {
      const diplomadosEspecificos = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === watchDisciplinasMas
      );
      setdiplomadosEspecificos(diplomadosEspecificos);
    }
  }, [watchDisciplinasMas, filteredProductos]);

  const watchDisciplinasMas2 = watch("disciplina2");
  const [diplomadosEspecificos2, setdiplomadosEspecificos2] = useState([]);

  useEffect(() => {
    if (watchDisciplinasMas2 === undefined || watchDisciplinasMas2 === "") {
      const diplomadosEspecificos2 = [""];
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Desarrollo Humano") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Desarrollo Humano"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Descuentos") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Descuentos"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Ingeniería") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Ingeniería"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Negocios") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Negocios"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "OnLive") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "OnLive"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Psicología") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Psicología"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2 === "Salud") {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === "Salud"
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    } else if (watchDisciplinasMas2) {
      const diplomadosEspecificos2 = filteredProductos.filter(
        (diplomado) => diplomado.disciplina === watchDisciplinasMas2
      );
      setdiplomadosEspecificos2(diplomadosEspecificos2);
    }
  }, [watchDisciplinasMas2, filteredProductos]);

  const { isLoading: f, disciplina } = useDisciplina();
  if (isLoading) return <Spinner />;
  if (!diplomado.length) return <Empty resourceName="diplomados" />;

  if (f) return <Spinner />;
  if (!disciplina.length) return <Empty resourceName="disciplinas" />;
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
    >
      <Heading as="h1" style={{ color: "#24242c" }}>
        ¡Llena todos los campos!{" "}
      </Heading>
      <FormRowProspectos
        label="Tu Nombre Completo"
        style={{ color: " #24242c" }}
        error={errors?.nombre?.message}
      >
        <Inputi
          type="text"
          id="nombre"
          disabled={isCreating}
          {...register("nombre", {
            required: "Este campo es requerido",
          })}
        />
      </FormRowProspectos>

      <FormRowProspectos label="Tu Correo" error={errors?.email?.message}>
        <Inputi
          type="mail"
          id="email"
          disabled={isCreating}
          {...register("email", {
            required: "Este campo es requerido",
          })}
        />
      </FormRowProspectos>

      <FormRowProspectos label="Tu Teléfono" error={errors?.telefono?.message}>
        <Inputi
          type="number"
          id="telefono"
          disabled={isCreating}
          {...register("telefono", {
            required: "Este campo es requerido",
            minLength: {
              value: 10,
              message: "El numero de telefono debe ser de 10 digitos",
            },
            MaxLength: {
              value: 11,
              message: "El numero de telefono debe ser menor de 10 digitos",
            },
          })}
        />
      </FormRowProspectos>

      <FormRowProspectos
        label="Tu Ocupación"
        error={errors?.ocupacion?.message}
      >
        <Inputi
          type="text"
          id="ocupacion"
          disabled={isCreating}
          {...register("ocupacion", {
            required: "Este campo es requerido",
          })}
        />
      </FormRowProspectos>

      <FormRowProspectos label="¿Cursaras más de un diplomado?">
        <>
          <CheckboxWrapper>
            <CheckboxInput
              type="checkbox"
              id="MasDe1Diploma"
              {...register("MasDe1Diploma", {})}
            />
            <CheckboxBox />
            <CheckboxLabel style={{ color: "#24242c" }}>Si </CheckboxLabel>
          </CheckboxWrapper>

          {/* <CheckboxWrapper>
          <CheckboxInput type="checkbox"/>
          <CheckboxBox/>
          <CheckboxLabel>No </CheckboxLabel>
        </CheckboxWrapper> */}
        </>
      </FormRowProspectos>

      <FormRowProspectos
        label={"Disciplina"}
        error={errors?.disciplina?.message}
      >
        <StyledSelectDiplomad
          Style={{ width: "20rem" }}
          id="disciplina"
          defaultValue=""
          isDisabled={isCreating}
          {...register("disciplina", {
            required: "Este campo es requerido",
          })}
        >
          {disciplina.map((disciplina, index) => (
            <option key={index} value={disciplina.Nombre}>
              {disciplina.Nombre}
            </option>
          ))}
        </StyledSelectDiplomad>
      </FormRowProspectos>

      {primerDiplomado && (
        <FormRowProspectos
          label={"Diplomados"}
          error={errors?.diplomado?.message}
        >
          <StyledSelectDiplomad
            Style={{ width: "20rem" }}
            id="diplomado"
            defaultValue=""
            isDisabled={isCreating}
            {...register("diplomado", {
              required: "Este campo es requerido",
            })}
          >
            <option value=""></option>

            {diplomadosEspecificos.map((diplomado, index) => (
              <option key={index} value={diplomado.id}>
                {diplomado.nombre}
              </option>
            ))}
          </StyledSelectDiplomad>
        </FormRowProspectos>
      )}

      {watchDiplomados && (
        <FormRowDiplomado
          label="Segunda Disciplina (2)"
          error={errors?.disciplina2?.message}
          style={{ borde: "20px", borderTopRigthRadius: "20px" }}
        >
          <StyledSelectDiplomad
            Style={{ width: "20rem" }}
            id="disciplina2"
            isDisabled={isCreating}
            {...register("disciplina2", {
              required: "Este campo es requerido",
            })}
          >
            {disciplina.map((disciplina, index) => (
              <option key={index} value={disciplina.Nombre}>
                {disciplina.Nombre}
              </option>
            ))}
          </StyledSelectDiplomad>
        </FormRowDiplomado>
      )}

      {watchDiplomados && segundoDiplomado && (
        <FormRowDiplomado
          label={"Segundo Diplomado"}
          error={errors?.diplomado2?.message}
        >
          <StyledSelectDiplomad
            Style={{ width: "20rem", backgroundColor: "#e6e5e6" }}
            id="diplomado2"
            defaultValue=""
            isDisabled={isCreating}
            {...register("diplomado2", {
              required: "Este campo es requerido",
            })}
          >
            <option value=""></option>
            {diplomadosEspecificos2.map((diplomado, index) => (
              <option key={index} value={diplomado.id}>
                {diplomado.nombre}
              </option>
            ))}
          </StyledSelectDiplomad>
        </FormRowDiplomado>
      )}

      <FormRowTerminos error={errors?.terminosCondiciones?.message}>
        <>
          <CheckboxWrapper>
            <CheckboxInput
              type="checkbox"
              id="terminosCondiciones"
              {...register("terminosCondiciones", {
                required: "Necesitas Aceptar los términos y condiciones",
              })}
            />
            <CheckboxBox />
            <CheckboxLabel
              htmlFor="terminosCondiciones"
              style={{ color: "#24242c" }}
            >
              Acepto los términos y condiciones
            </CheckboxLabel>
          </CheckboxWrapper>

          <Button onClick={handleOpenModal} variation="danger">
            Términos y condiciones
          </Button>
          {showModal && (
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 999,
              }}
              onClick={handleCloseModal}
            >
              <div
                style={{
                  position: "relative",
                  backgroundColor: "var(--color-grey-100)",
                  padding: "20px",
                  borderRadius: "5px",
                  width: "90%",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 style={{ color: "var(--color-grey-500)" }}>
                  Términos y condiciones
                </h2>
                <TerminosCondiciones />
                <Button
                  onClick={handleCloseModal}
                  style={{ backgroundColor: "#13b5e7" }}
                >
                  Aceptar
                </Button>
              </div>
            </div>
          )}
        </>
      </FormRowTerminos>

      <FormRowProspectos>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancelar
        </Button>
        <Button disabled={isCreating} variation="midiplomado2">
          Registrar
        </Button>
      </FormRowProspectos>
    </Form>
  );
}

export default CreateProspectoForm;
