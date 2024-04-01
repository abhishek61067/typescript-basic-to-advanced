"use client";
import React, { createContext, useReducer } from "react";
import { CHANGE_THEME } from "./../constant/constant";
import { CHANGE_FONTSIZE } from "./../constant/constant";
// initial state
const initialState = {
  theme: "light",
  fontSize: 20,
};

// type
type stateType = {
  theme: string;
  fontSize: number;
};

type ThemeActionType = {
  type: typeof CHANGE_THEME;
};
type FontsizeActionType = {
  type: typeof CHANGE_FONTSIZE;
  payload: number;
};

// discriminated union type
type actionType = ThemeActionType | FontsizeActionType;

type ContextType = {
  state: stateType;
  dispatch: React.Dispatch<actionType>;
};

// reducer
const ThemeAndFontsizeReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case CHANGE_FONTSIZE:
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      return state;
  }
};

// create context
export const ThemeAndFontSizeContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

const ThemeAndFontSizeContextComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(ThemeAndFontsizeReducer, initialState);
  return (
    <ThemeAndFontSizeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeAndFontSizeContext.Provider>
  );
};

export default ThemeAndFontSizeContextComponent;
