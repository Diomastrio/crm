import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Section = styled.div`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  overflow-y: auto;
`;

export { Container, Section };
