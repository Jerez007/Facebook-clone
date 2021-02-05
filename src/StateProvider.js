import React, { createContext, useContext, useReducer } from 'react';

export const stateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {childredn}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);