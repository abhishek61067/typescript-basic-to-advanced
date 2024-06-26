import React from "react";
import Section from "@/components/Section";
import ItemCard from "../../components/ItemCard";

const ItemList = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: ["alphabet", "words"],
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: ["Apple", "Banana"],
  },
];

const GenericsPage = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Generics</h1>
      <Section />
      <div className="grid justify-center">
        <div className="w-[500px]">
          <h2 className="text-xl font-bold">Item List</h2>
          <ul className="grid grid-cols-2 gap-1 justify-between">
            {ItemList.map((item) => {
              return (
                <li key={item.id}>
                  <ItemCard id={item.id} title={item.title} body={item.body} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenericsPage;
