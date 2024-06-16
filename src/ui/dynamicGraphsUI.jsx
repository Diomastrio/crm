import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow-x: scroll;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const Section = styled.div`
  flex: 1;
   width: 100%; // Takes up all available space
  min-width: 24rem; // Doesn't shrink below 24rem
  padding: 10px;
  border: 1px solid var(grey-200);
  overflow-x: scroll;
  overflow-y: scroll;
    &::-webkit-scrollbar {
    width: 0px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-400); 
    border-radius: 6px; /
  }
`;

export { Container, Section };
