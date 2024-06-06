import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  border: 1px solid var(--color-grey-200);
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  overflow-y: scroll;
  overflow-x: scroll;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;
const StyledNumberInput = styled.input.attrs({ type: "number" })`
  width: 100px;
  padding: 8px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: #aaa;
  }
`;
const StyledInput = styled.div`
  padding: 0.8rem 8rem;
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
  text-align: center;
  align-items: center;
  object-position: center;
  justify-content: center;
  &:first-child {
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-top-right-radius: 20px;
  }
`;

const StyledTableHeader = styled.thead`
  padding: 1.6rem 2rem;
  letter-spacing: 0.4px;
  color: var(--color-grey-600);
`;

const StyledTableHeaderCell = styled.th`
  padding: 12px 15px;
`;

const StyledTableBody = styled.tbody`
  background-color: var(--color-grey-0);
  padding: 1.2rem 2.4rem;

  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
`;

const StyledTableRow = styled.tr`
  border: 1px solid var(--color-grey-100);
  &:nth-child(even) {
    background-color: var(--color-grey-100);
  }
  &:hover {
    background-color: var(--color-grey-300);
  }

  &:last-child {
    border-top-right-radius: 8px;
  }
`;

const StyledTableCell = styled.td`
  padding: 5px 10px;
  border-bottom: 1px solid #dddddd;
  text-align: center;
  align-items: center;
  object-position: center;

  &:last-child {
    display: flex;
    align-items: center;
    border-bottom: 0px solid #000;
  }

  &:nth-child(15) {
    background-color: var(--color-grey-200);
  }

  &:nth-child(17) {
    background-color: var(--color-grey-200);
  }
`;

export {
  StyledTable,
  StyledTableHead,
  StyledTableHeader,
  StyledTableHeadCell,
  StyledTableHeaderCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledInput,
  Input,
  StyledNumberInput,
};