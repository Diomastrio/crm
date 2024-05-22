import styled from "styled-components";
const Container = styled.div`
  overflow-x: 
  padding: 3px;
`;

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  overflow: hidden;
`;

const StyledTableHead = styled.thead`
  padding: 1.6rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
  letter-spacing: 0.4px;
  background-color: var(--color-grey-50);
  color: var(--color-grey-600);
`;

const StyledTableHeadCell = styled.th`
  padding: 12px 15px;
  border: 1px solid var(--color-grey-100);
  &:first-child {
    border-top-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const StyledTableBody = styled.tbody`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;
`;

const StyledTableRow = styled.tr`
  border: 1px solid var(--color-grey-100);
  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const StyledTableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #dddddd;
`;

const StyledButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-primary-600);
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const StyledParagraph = styled.p`
  font-size: 1.6rem;
  color: var(--color-grey-600);
  margin-bottom: 2rem;
`;

const StyledModalButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const StyledSelect = styled.select`
  background: none;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:hover {
    background-color: var(--color-grey-100);
  }
`;

const StyledInput = styled.input`
    border: "1px solid var(--color-grey-100)",
    backgroundColor: "var(--color-grey-0)",
    boxShadow: "var(--shadow-sm)",
    borderRadius: "var(--border-radius-sm)",
    padding: "0.4rem",
    paddingLeft: "40px", // Add this to make space for the icon
    display: "flex",
    gap: "0.4rem",
    width: "100%",
    `;

const InputDiv = styled.div`
  display: "flex",
  alignItems: "center",
  paddingBottom: "10px",
  position: "relative", 
`;

export {
  InputDiv,
  StyledInput,
  StyledSelect,
  ButtonContainer,
  Container,
  StyledParagraph,
  StyledModalButton,
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledButton,
  StyledModal,
};
