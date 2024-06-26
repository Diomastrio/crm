import styled from "styled-components";

const DashboardBox = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 3.2rem;
  width:100%;
  height:100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const StyledSalesChart = styled(DashboardBox)`
  grid-column: 1 / -1;
 justfy-between;

  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }
`;


const StyledDynamicChart = styled.div`
 /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);


  display: flex;
  flex-direction: column;

 justfy-between;
  /* Hack to change grid line colors */
  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-300);
  }

  
  width:60rem;

  //overflow-y: scroll;
  //overflow-x: scroll;
`;

const StyledSubHeading = styled.p`
  paddingbottom: 2.6rem;
  font-size: 2rem;
  font-weight: 400;
  text-align: center;
`;

export { StyledDynamicChart, StyledSubHeading,StyledSalesChart };