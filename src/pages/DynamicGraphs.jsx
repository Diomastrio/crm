import React from "react";
import DinamicTable from "../features/dynamicGraphs/DinamicTable";
import GraphFilter from "../features/dynamicGraphs/graphFilter";
import { FormRowGraphic } from "../ui/FormRow";
import { StyledSelect,  } from "../ui/SelectTwo";
import Heading from "../ui/Heading";
import Row from "../ui/Row"
import { useForm } from "react-hook-form";

function DinamicGraphs() {
  const { register, watch, formState } = useForm({});
  const { errors } = formState;
  const graficas = watch("graficas",'X'); 
  return (
    <>
     
       <Row type="vertical">
      <Heading as="h1">Comparar Datos</Heading>
      </Row>
      <Row type="horizontal" style={{ gap: '3rem'}}>
        <GraphFilter/>
        <FormRowGraphic label={"Grafica"} error={errors?.cursa_actualmente?.message}>
        <StyledSelect
          id="cursa_actualmente"
          {...register("graficas", {
            required: "Este campo es requerido",
          })}
        >
          <option value="X"></option>
          <option value="Genero">Genero</option>
          <option value="Actividad">Actividad</option>
          <option value="ActividadH">Actividad Hombres</option>
          <option value="ActividadM">Actividad Mujeres</option>
          <option value="DiplMes">Diplomas X Mes</option>
          <option value="DiplEdad">Diplomas X Edad</option>
          <option value="ClientesD">N. Clientes X Disciplina</option>
          <option value="ActivosD">N. Activos X Disciplina</option>
          <option value="ClientesGD">N. Clientes Género y Disciplina</option>
        </StyledSelect>
      </FormRowGraphic>
      </Row>
      <DinamicTable grafico={graficas}/>
    </>
  );
}

export default DinamicGraphs;
