import styled from "styled-components";

const Card = styled.div`
  width: 240px;
  height: 100%;
  border: 0px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 1);
  overflow: hidden;
  margin-left: 35px;
  margin-top: 30px;
  background: rgba(127, 127, 127, 0.1);
`;

// Define a styled component for the card content
const Content = styled.div`
  padding: 15px;
`;

// Define a styled component for the card title
const Title = styled.h3`
  margin: 0;
  margin-bottom: 5px;

  font-size: 21px;
  color: var(--color-grey-600);
  font-family: "Sono";
  text-align: center;
  border-bottom: 1px solid rgba(192, 192, 192, 0.5);
  text-transform: uppercase;
`;

const Label = styled.span`
  color:#008080;
  text=transform: "uppercase"
`;

function ArtiCard({ clientes,index }) {

  const {
    nombre,
    email, 
    curp, 
    numero_diplomados,
    diplomados_terminados,
    cursa_actualmente
  } = clientes;

  const cursaStatus = cursa_actualmente ? "SI cursa" : "NO";
  return (
    <Card>
      <Content>
        <div style={{ overflow: "hidden" }}>
        </div>
         <Title>{index}</Title>
        
        <div>
          Cliente:{" "}<Label>{nombre}</Label>
        </div>

        <div>
        Email:{" "}<Label>{email}</Label>
        </div>

        <div>
        Numero diplomados:{" "}<Label>{numero_diplomados}</Label>
        </div>

        <div>
        Diplomados terminados:{" "}<Label>{diplomados_terminados}</Label>
        </div>

        <div>
        Cursando actualmente:{" "}<Label>{cursaStatus}</Label>
        </div>

        <div>
        Curp:{" "}<Label>{curp}</Label>
        </div>
      </Content>
    </Card>
  );
}

export default ArtiCard;
