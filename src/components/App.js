import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import ItemGrid from "./ItemGrid";
import GlobalStyles from "./GlobalStyles";
import Cart from "./Cart";

const App = () => {
  return (
    <Wrapper>
      <Header>
        <Logo />
      </Header>
      <ItemGridWrapper>
        <ItemGrid />
      </ItemGridWrapper>
      <Cart />
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const Header = styled.header`
  grid-area: header;
  padding: 10px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

export default App;
