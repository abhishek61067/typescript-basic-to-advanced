"use client";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CHANGE_FONTSIZE } from "@/constant/constant";
import { ThemeAndFontSizeContext } from "@/context/ThemeAndFontSizeContext";
import React, { useContext } from "react";

const UseContextAndUseReducerWithType = () => {
  const { state, dispatch } = useContext(ThemeAndFontSizeContext);
  console.log("state: ", state);

  // handle change font size
  const handleChangeFontSize = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({ type: CHANGE_FONTSIZE, payload: 25 });
  };

  // handle change theme
  const handleChangeTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        useContext and useReducer with type
      </h1>
      <Section />
      <div className="grid justify-center">
        <div className="grid gap-2 w-[100px]">
          <Button onClick={handleChangeTheme}>Change Theme</Button>
          <Button variant="outline" onClick={handleChangeFontSize}>
            Change Font size
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UseContextAndUseReducerWithType;
