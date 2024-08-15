// working with union types
// function that will print lower string or number
const greets = (e: string | number) => {
  //error because the operation is not valid with both types i.e. string and number
  console.log(e.toLowerCase());
  // solution:narrowing
  // narrowing
  if (typeof e === "string") {
    console.log(e.toLowerCase());
  } else {
    console.log(e);
  }
};
