import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Wrapper>
      <Details>
        <Name>DDR</Name>
        <Price>16</Price>
        <ObjInfo>ER MEJO</ObjInfo>
      </Details>
    </Wrapper>
  );
};
export default CartItem;

const Wrapper = styled.div`
  border: 2px lightpink dashed;
`;

const Details = styled.div`
  border: 1px darkgray solid;
  background: lightgray;
`;

const Name = styled.h2`
  color: lightpink;
`;
const Price = styled.div`
  color: black;
`;
const ObjInfo = styled.div`
  color: black;
`;
