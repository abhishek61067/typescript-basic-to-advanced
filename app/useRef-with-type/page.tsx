"use client";

import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef } from "react";

const UseRefWithType = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //focusing the input
    inputRef.current?.focus();
  }, []);

  //   handle send
  const handleSend = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const username = usernameInputRef.current?.value;
    console.log("username: ", username);
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Use Ref with Type</h1>
      <Section />
      <div className="grid justify-center">
        <form action="" className="grid gap-4 w-[300px]">
          <input
            type="text"
            placeholder="focus here"
            name="focusInput"
            className="p-2"
            ref={inputRef}
          />
          <input
            type="text"
            placeholder="username"
            name="username"
            className="p-2"
            ref={usernameInputRef}
          />
          <Button onClick={handleSend}>Send</Button>
        </form>
      </div>
    </div>
  );
};

export default UseRefWithType;
