import React from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import Button from "../../ui/Button";
const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 50px;
`;

const SubscriptionOption = styled.div`
  width: 30rem;
  padding: 20px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  margin: 0 20px;
  text-align: center;
`;

const OptionTitle = styled.h2`
  color: #fff;
`;

const Price = styled.p`
  color: #fff;
  font-size: 24px;
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin-top: 20px;
`;

const Benefit = styled.li`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .icon {
    margin-right: 10px;
    color: ${(props) => (props.highlighted ? "#2db94d" : "red")};
  }
`;

function Tipos() {
  return (
    <SubscriptionWrapper>
      <SubscriptionOption backgroundColor="#00CED1">
        <OptionTitle>Gratis</OptionTitle>
        <Price>$0/mes</Price>
        <BenefitsList>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Comprar Sin Limite
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Catalogo Completo
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-times" />
            </span>
            Publicaciones Ilimitadas
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-times" />
            </span>
            Mayor Personalizacion de Usuario
          </Benefit>
        </BenefitsList>
        <Button variation="swapii">Comprar</Button>
      </SubscriptionOption>

      <SubscriptionOption backgroundColor="#4169E1">
        <OptionTitle>Pro</OptionTitle>
        <Price>$50/mes</Price>
        <BenefitsList>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Comprar Sin Limite
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Catalogo Completo
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Publicaciones Ilimitadas
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-times" />
            </span>
            Mayor Personalizacion de Usuario
          </Benefit>
        </BenefitsList>
        <Button variation="swapii">Comprar</Button>
      </SubscriptionOption>

      <SubscriptionOption backgroundColor="#8A2BE2">
        <OptionTitle>Premium</OptionTitle>
        <Price>$99/mes</Price>
        <BenefitsList>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Comprar Sin Limite
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Catalogo Completo
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Publicaciones Ilimitadas
            <GiCheckMark />
          </Benefit>
          <Benefit highlighted={true}>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
            Mayor Personalizacion de Usuario
            <GiCheckMark />
          </Benefit>
        </BenefitsList>
        <Button variation="swapii">Comprar</Button>
      </SubscriptionOption>
    </SubscriptionWrapper>
  );
}

export default Tipos;
