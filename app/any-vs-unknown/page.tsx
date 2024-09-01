// replace any with unknown to see the error issued at line 14
let value: unknown;

value = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase()); // Works fine, output: "HELLO"
}

value = 10;
if (typeof value === "number") {
  console.log(value.toUpperCase());
}

console.log(value.toUpperCase()); // No type check here, runtime error: value.toUpperCase is not a function
