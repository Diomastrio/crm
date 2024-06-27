import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmAdd({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Añadir {resourceName}</Heading>
      <p>
        Estas seguro de que quieres añadir este {resourceName}?
      </p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onCloseModal}>
          Cancelar
        </Button>
        <Button variation="swapii" disabled={disabled} onClick={onConfirm}>
        Añadir
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmAdd;
