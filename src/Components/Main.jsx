import React, { useContext } from "react";
import styled from "styled-components";
import { AppProvider } from "../Context/Store";

export const Main = () => {
  const { products, deleteProduct, quantityPlus, quantityMinus,total } =
    useContext(AppProvider);

  return (
    <ContDivContent>
    <ContainerContent>
      <DivContent>
        <p>#</p>
        <p>Product</p>
        <p>Product Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </DivContent>
      {products.map((el) => {
        return (
          <DivImg key={el.id}>
            <IdMap>
              <p>{el.id}</p>
            </IdMap>
            <ImgContent src={el.img} />
            <Titleh2>{el.title}</Titleh2>
            <DivQuantity>
              <p>{el.price} $</p>
              <div>
                <ButtonQuant onClick={() => quantityMinus(el.id)}>-</ButtonQuant>
                <span>{el.quantity}</span>
                <ButtonQuant onClick={() => quantityPlus(el.id)}>+</ButtonQuant>
              </div>
              <ButtonRemove onClick={() => deleteProduct(el.id)}>
                Remove
              </ButtonRemove>
            </DivQuantity>
          </DivImg>
        );
      })}
      <h1 style={{marginTop: "40px"}}> Total: {total}$</h1>
    </ContainerContent>
      </ContDivContent>
  );
};
const ContDivContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
`
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #96bb39;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px #5db53e;
  width: 800px;
  backdrop-filter: blur(5px);
  color: #fff;
  padding: 50px 0px;
  margin-top: 50px;
  background-color: #00000087;
`;
const DivContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 800px;
`;
const ImgContent = styled.img`
  width: 50px;
  margin-right: 0px;
`;
const DivImg = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 800px;
  margin-top: 10px;
`;
const DivQuantity = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
const IdMap = styled.div`
  margin-left: 40px;
`;
const Titleh2 = styled.h2`
  margin-right: 40px;
`;
const ButtonQuant = styled.button`
  width: 30px;
  height: 30px;
  border: 0;
  background-color: #5db53e;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  margin: 20px;
  border-radius: 7px;
  transition: 0.2s;
  &:hover{
    background-color: #fff;
    color: #5db53e;
  }
`;
const ButtonRemove = styled.button`
  height: 30px;
  width: 90px;
  background-color: #ff0000a4;
  border: 0;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  margin-right: 20px;
  transition: 0.2s;
  &:hover{
    background-color: #fff;
    color: #ff0000a4;
  }
`;
