import { ObjType4 } from "@/types/types";

interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person = {
  name: "Max",
  age: 27,
};
printPersonProperty(person, "name"); // Printing person property name: "Max"
// Error in next line
// printPersonProperty(person, "nam");

//keyof with index signature
const obj8: ObjType4 = { name: "a" };
