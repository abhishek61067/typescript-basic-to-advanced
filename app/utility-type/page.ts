import { ObjType2, ObjType3, Type3, funcType1, funcType2 } from "@/types/types";
//Partial
const obj1: Partial<ObjType2> = {};

// required
const obj2: Required<ObjType2> = {
  name: "a",
  age: 4,
  maritalStatus: false,
  sex: "unknown",
};

//Record
const obj3: Record<string, number> = {
  name: 1,
};

//omit
const obj4: Omit<ObjType2, "maritalStatus" | "name"> = {
  age: 4,
};

//pick
const obj5: Pick<ObjType2, "name" | "age"> = {
  name: "Abhi",
  age: 12,
};

//exclude
const var1: Exclude<Type3, number> = true;

//ReturnType
const obj6: ReturnType<funcType1> = { x: 4 };

//Parameters
const obj7: Parameters<funcType2>[1] = { y: 1 };

//Readonly
const obj8: Readonly<ObjType3> = { name: "a" };
// error in next line
// obj8.name = "b";
