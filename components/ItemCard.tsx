import React from "react";

type ItemType<T> = {
  id: number;
  title: string;
  body: T[];
};
const ItemCard = (props: ItemType<string>) => {
  return (
    <div className="mb-2 grid justify-center">
      <div>
        <h2 className="font-bold">{props.title}</h2>
        <ul className="list-disc">
          {props.body.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ItemCard;
