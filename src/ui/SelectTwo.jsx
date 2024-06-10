import styled from "styled-components";

const StyledSelect = styled.select`
  width: 30%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 4px;
  font-size: 2rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  outline: none;

  display: inline-flex
  &:focus {
    border-color: #90caf9;
  }
`;

const StyledSelectDiplomado = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 4px;
  font-size: 1.6rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  outline: none;

  display: inline-flex
  &:focus {
    border-color: #90caf9;
  }
`;


export {StyledSelect, StyledSelectDiplomado}