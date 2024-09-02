let value: unknown;

value = "Hello";
// narrowing
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Works fine, output: "HELLO"
}

value = 10;
if (typeof value === "number") {
  console.log(Number(value)); // Works fine, output: "HELLO"
}
