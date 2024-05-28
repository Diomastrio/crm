import React from "react";
import DefaultGraphs from "../features/cliente/../graficas/DefaultGraphs";
import Heading from "../ui/Heading";

function NewGraphs() {
  return (
    <div>
      <Heading as="h3">Graphs</Heading>
      <DefaultGraphs />
    </div>
  );
}

export default NewGraphs;
