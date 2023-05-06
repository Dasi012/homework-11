import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AppProvider } from "../Context/Store";

export const Header = () => {
  const { product, addProduct } = useContext(AppProvider);
  return (
    <DivHeader>
      {product.map((el) => {
        return (
          <ContMap key={el.id}>
            <DivImg>
              <ImgHeader src={el.img} />
            </DivImg>
            <h1>{el.title}</h1>
            <h2>{el.price} $</h2>
            <ButtonAddProduct onClick={() => addProduct(el.id)}>
              Added
            </ButtonAddProduct>
          </ContMap>
        );
      })}
    </DivHeader>
  );
};
const ImgHeader = styled.img`
  width: 150px;
  margin: 40px;
`;
const DivImg = styled.div`
  height: 200px;
  width: 200px;
`;
const DivHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
`;
const ContMap = styled.div`
  border: 1px solid #96bb39;
  border-radius: 12px;
  box-shadow: 0px 0px 3px 1px #5db53e;
  text-align: center;
  margin-top: 10px;
  width: 220px;
  color: #fff;
  background-color: #00000095;
  backdrop-filter: blur(4px);
  transition: 0.3s;
  &:hover {
    margin-top: 0px;
  }
`;
const ButtonAddProduct = styled.button`
  margin: 20px;
  width: 100px;
  height: 40px;
  border: 0;
  border-radius: 8px;
  background-color: #5db53e;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  transition: 0.2s;
  &:hover {
    background-color: #fff;
    color: #5db53e;
  }
`;
