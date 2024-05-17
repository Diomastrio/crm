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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    width: 500px;
    max-width: 100%;
  }
`;

export {
  Container,
  StyledTable,
  StyledTableHead,
  StyledTableHeadCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledButton,
  StyledModal,
};
