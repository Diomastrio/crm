import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledSubHeading = styled.p`
  paddingtop: 2.6rem;
  paddingbottom: 2.6rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export { DashboardBox, StyledSubHeading };
