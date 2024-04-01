import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import React from "react";

const UseContextAndUseReducerWithType = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        useContext and useReducer with type
      </h1>
      <Section />
      <div className="grid justify-center">
        <div className="grid gap-2 w-[100px]">
          <Button>Change Theme</Button>
          <Button variant="outline">Change Font size</Button>
        </div>
      </div>
    </div>
  );
};

export default UseContextAndUseReducerWithType;
