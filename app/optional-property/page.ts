type ObjType = {
  name: string;
  city?: string;
};

const greet = (obj: ObjType) => {
  console.log(obj.city);
  // when we apply method in optional properties, we need to check if it is undefined
  console.log(obj.city?.toUpperCase());
};

const obj1 = { name: "abhishek" };

greet(obj1);
