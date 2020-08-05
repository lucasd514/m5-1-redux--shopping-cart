import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
