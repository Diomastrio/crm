import styled from "styled-components";

const StyledFormRow = styled.div`
display: grid;
align-items: center;
grid-template-columns: 18rem 1.7fr 0.2fr;
gap: 2.4rem;

padding: 1.2rem 0;

&:first-child {
  padding-top: 0;
}

&:last-child {
  padding-bottom: 0;
}

&:not(:last-child) {
  border-bottom: 1px solid var(--color-grey-100);
}

&:has(button) {
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
}
`;

const StyleFormRowDiplomado = styled.div`
display: grid;
align-items: center;
grid-template-columns: 18rem 1.7fr 0.2fr;
gap: 2.4rem;
background-color: var(--color-grey-50);

padding: 1.2rem 0;

&:first-child {
  padding-top: 0;
}

&:last-child {
  padding-bottom: 0;
}

&:not(:last-child) {
  border-bottom: 1px solid var(--color-grey-100);
}

`;

const Label = styled.label`
  font-weight: 500;
  margin-left: 0.5rem;

`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
  grid-column: 2; 
  text-align: center;
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}


function FormRowDiplomado({ label, error, children }) {
  return (
    <StyleFormRowDiplomado>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyleFormRowDiplomado>
  );
}

export {
FormRow,
FormRowDiplomado
};
