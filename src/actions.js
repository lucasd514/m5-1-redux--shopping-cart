import React from "react";
import styled from "styled-components";

export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});
