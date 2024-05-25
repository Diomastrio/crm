import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);

      /* Make form scrollable */
      max-height: 120vh;
      overflow-y: auto;

      /* Ensure the form fits the screen properly */
      box-sizing: border-box;
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 50rem;

      /* Center the form within the modal */
      margin: 0 auto;

      /* Make form scrollable */
      max-height: 80vh;
      overflow-y: auto;

      /* Ensure the form fits the screen properly */
      box-sizing: border-box;
    `}

  /* General form styling */
  overflow: auto;
  font-size: 1.4rem;

  /* Media queries for responsiveness */
  @media (max-width: 768px) {
    ${(props) =>
      props.type === "modal" &&
      css`
        width: 90%;
        padding: 2rem;
      `}

    ${(props) =>
      props.type === "regular" &&
      css`
        padding: 1.6rem 2rem;
      `}
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;