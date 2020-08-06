import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { useSelector } from "react-redux";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  const NewCopy = { ...state };
  switch (action.type) {
    case "ADD_ITEM": {
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    }
    case "REMOVE_ITEM": {
      delete NewCopy[action.item.id];
      return {
        ...NewCopy,
      };
    }
    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
