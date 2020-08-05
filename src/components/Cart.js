import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";
const Cart = () => {
  return (
    <CartBox>
      <TopDetails>
        <h2>Your Cart</h2>
        <div>Items: 1</div>
      </TopDetails>
      <CartItem />{" "}
      <CheckOutDeetz>
        <Total> total items: 1 </Total>
        <CObutton>Check Out</CObutton>
      </CheckOutDeetz>
    </CartBox>
  );
};
export default Cart;

const CheckOutDeetz = styled.div`
  display: flex;
`;

const CObutton = styled.button`
  border-radius: 25%;
  margin-left: 20px;
  background: grey none;
`;
const CartBox = styled.div`
  border: 3px black solid;
  width: 350px;
  background: purple;
`;

const TopDetails = styled.div`
  color: white;
  margin-bottom: 20px;
`;

const Total = styled.div`
  color: white;
  margin-right: 20px;
`;
