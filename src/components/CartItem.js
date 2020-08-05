import React from "react";
import styled from "styled-components";

const CartItem = (props) => {
  console.log("this cart item", props.item.id);

  return (
    <Wrapper>
      <Details>
        <Name>{props.item.title}</Name>
        <Price>{props.item.price}</Price>
        <ObjInfo>{props.item.id} stickers, one pack</ObjInfo>
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
