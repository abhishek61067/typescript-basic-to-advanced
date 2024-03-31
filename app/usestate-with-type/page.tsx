"use client";
import { Button } from "@/components/ui/button";
import { userType } from "@/types/user-type";
import React, { useState } from "react";

const UseStateWithTypePage = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<userType | null>(null);

  //   handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.currentTarget.value);
  };
  //   handle submit
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUser({
      userName: userName,
      sessionId: Math.random() * 1000,
    });
  };
  return (
    <div>
      {user ? (
        <p className="text-center">{`Hi ${user.userName}`}</p>
      ) : (
        <form className="grid gap-2 justify-center" onSubmit={handleFormSubmit}>
          <h1 className="font-bold text-2xl">useState with type</h1>
          <input
            type="text"
            placeholder="username"
            className="w-fit p-2"
            onChange={handleInputChange}
          />
          <Button variant={"outline"} className="bg-blue-500 text-white w-fit">
            Login
          </Button>
        </form>
      )}
    </div>
  );
};

export default UseStateWithTypePage;
