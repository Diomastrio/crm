import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Section = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  overflow-y: auto;
  overflow-x: scroll;
  max-width:40rem;
`;

export { Container, Section };
