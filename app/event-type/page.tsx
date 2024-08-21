"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
const postList = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
const EventTypePage = () => {
  // handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submit");
  };
  // handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };
  // handle delete
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("deleted post with id: ", id);
  };

  return (
    <div>
      <h1 className="font-bold text-3xl mb-5">Event Type example</h1>
      {/* for filter */}
      <form onSubmit={handleSubmit}>
        <input
          className="border rounded-md p-2"
          type="text"
          name="search"
          onChange={handleInputChange}
        />
        <Button
          type="submit"
          className="m-1 bg-neutral-500 text-white"
          variant="outline"
        >
          Search
        </Button>
      </form>
      {/* for displaying  posts */}
      <ul className="list-group grid gap-4 my-4">
        {postList.map((item) => (
          <li key={item.id}>
            <h2 className="mb-2 text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-500">{item.body}</p>
            <Button
              onClick={(e) => {
                handleDelete(e, item.id);
              }}
              variant="outline"
              className="bg-red-500 text-white"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTypePage;
