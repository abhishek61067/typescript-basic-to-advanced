// Reference :  https://www.w3schools.com/typescript/typescript_casting.php

const num1 = 1;
console.log((num1 as unknown as string).length);

//OR
// while you force cast or cast the type to something which cant be casted like number to string, its important to annotate the type as unknown
const num2: unknown = 2;
console.log((num2 as string).length); // prints undefined since numbers don't have a length

const num3 = 3;
console.log(
  String(num3),
  String(num3).length,
  typeof num3,
  typeof String(num3)
);
