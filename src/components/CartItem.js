import React from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { x } from "react-icons-kit/feather/x";
import { useDispatch } from "react-redux";

import { removeItem } from "../actions";

const CartItem = ({ item, id }) => {
  console.log("this cart item", item.id);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Details>
        <button onClick={() => dispatch(removeItem(item.id))}>
          <Icon icon={x} />
        </button>
        <Name>{item.title}</Name>
        <Price>{item.price}</Price>
        <ObjInfo>{item.id} stickers, one pack</ObjInfo>
      </Details>
    </Wrapper>
  );
};
export default CartItem;

const Wrapper = styled.div`
  border: 2px lightpink dashed;
  margin-bottom: 2px;
  margin-top: 10px;
`;

const Xbut = styled.button`
  background: Transparent;
`;
const Details = styled.div`
  border: 1px darkgray solid;
  background: lightgray;
`;

const Name = styled.h2`
  color: purple;
`;
const Price = styled.div`
  color: black;
`;
const ObjInfo = styled.div`
  color: black;
`;
