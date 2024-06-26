import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #ffffff;
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  height: 7rem;

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

function Homefooter() {
  return (
    <>
      <StyledFooter/>
    </>
  );
}

export default Homefooter;
