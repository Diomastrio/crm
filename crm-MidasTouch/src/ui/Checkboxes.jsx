import styled from "styled-components";

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;
const CheckboxBox = styled.span`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  background-color: var(--color-grey-0);
  color: var(--color-grey-700);
  border: 1px solid var(--color-grey-300);
  transition: background-color 0.2s ease-in-out;
  margin-right: 0.5rem;
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;


  &::before {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3.4rem;
    font-weight: bold;    
    color: #fff;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
  
  ${CheckboxInput}:checked ~ & {
    &::before {
      opacity: 1;
    }
  }
`;

const CheckboxLabel = styled.span`
font-weight: 500;
display: inline-block;
`;

 

export {  CheckboxWrapper,CheckboxInput,CheckboxBox,CheckboxLabel
};
