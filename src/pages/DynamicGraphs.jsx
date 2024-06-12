import React from "react";
import { Container, Section } from "../ui/dynamicGraphs";
import GraphFilter from "../features/dynamicGraphs/graphFilter";
import DynamicGraphs from "../features/dynamicGraphs/graphSections";
function DinamicGraphs() {
  return (
    <>
      <GraphFilter />
      <Container>
        <Section>
          Graph 1
          <DynamicGraphs />
        </Section>
        <Section>
          Graph 2
          <DynamicGraphs />
        </Section>
        <Section>
          Graph 3
          <DynamicGraphs />
        </Section>
      </Container>
    </>
  );
}

export default DinamicGraphs;
