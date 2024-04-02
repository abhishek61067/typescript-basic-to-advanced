import React from "react";

type fruits = "Banana" | "Carrot" | "Apple";
// excluding carrot
type pureFruits = Exclude<fruits, "Carrot">;

// this should give error
// const fruitString: pureFruits = "Carrot";

const fruitString: pureFruits = "Banana";

//combined type
type theme = "dark" | "light";
type rawColor = "red" | "green" | "blue";

type color = `${theme}-${rawColor}`;

// excluding dark-blue and dark-green
type specialColor = Exclude<color, "dark-blue" | "dark-green">;

const colorString: color = "dark-red";

// this should give error
// const specialColorString: specialColor = "dark-blue";

const specialColorString: specialColor = "dark-red";

const CombinedTypeAndExclude = () => {
  return <div></div>;
};

export default CombinedTypeAndExclude;
