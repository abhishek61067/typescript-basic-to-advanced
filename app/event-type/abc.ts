type ObjTypes = {
  name: string;
  city?: string;
};

const greets = (obj: { name: string; city?: string }) => {
  console.log(obj.city);
  // when we apply method in optional properties, we need to check if it is undefined
  console.log(obj.city?.toUpperCase());
};

const obj1s = { name: "abhishek" };

greet(obj1s);
