import styled from "styled-components";

const StyledSelect = styled.select`
  /* Base styles for the select element */
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 2rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  outline: none;

  /* Focus styles */
  &:focus {
    border-color: #90caf9;
  }

  /* Disabled styles (optional) */
  ${(props) =>
    props.isDisabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

export default StyledSelect;